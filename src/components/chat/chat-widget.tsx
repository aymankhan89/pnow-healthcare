"use client";

import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Send, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Message = {
  id: string;
  sender: "user" | "assistant";
  text: string;
};

const quickPrompts = [
  "Request a callback",
  "Ask about service pricing",
  "Check implementation timeline",
  "Schedule a demo",
];

const initialMessages: Message[] = [
  {
    id: "welcome-1",
    sender: "assistant",
    text: "Hi there! I can help with services, pricing, or scheduling time with our team.",
  },
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const formattedMessages = useMemo(() => messages, [messages]);

  const sendToBackend = async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: content,
          history: messages.map((m) => ({
            role: m.sender === "user" ? "user" : "assistant",
            content: m.text,
          })),
        }),
      });

      if (!res.ok) {
        throw new Error("Chat service unavailable. Please try again.");
      }

      const data = await res.json();
      const replyText = data?.reply ?? "Thanks for reaching out! A specialist will respond shortly.";

      const reply: Message = {
        id: `assistant-${crypto.randomUUID()}`,
        sender: "assistant",
        text: replyText,
      };
      setMessages((prev) => [...prev, reply]);
    } catch (err) {
      const fallback: Message = {
        id: `assistant-${crypto.randomUUID()}`,
        sender: "assistant",
        text: "Thanks for your message. We couldn't connect to chat right now—please use the contact form or call us, and we'll follow up quickly.",
      };
      setMessages((prev) => [...prev, fallback]);
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;

    const userMsg: Message = {
      id: `user-${crypto.randomUUID()}`,
      sender: "user",
      text: content,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    void sendToBackend(content);
  };

  const toggleOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    if (!isOpen) return;
    const container = document.getElementById("chat-scroll-container");
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [isOpen, formattedMessages]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chat"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-white">
              <div>
                <p className="text-sm font-semibold">Chat with us</p>
                <p className="text-xs text-blue-50/80">Typically replies within minutes</p>
              </div>
              <button
                aria-label="Minimize chat"
                onClick={toggleOpen}
                className="rounded-lg p-1 text-white hover:bg-primary/30 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
            </div>

            <div
              id="chat-scroll-container"
              className="max-h-80 space-y-3 overflow-y-auto px-4 py-3 text-sm"
            >
              {formattedMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 ${
                      msg.sender === "user"
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-slate-800"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading ? (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-3 py-2 text-slate-600">
                    <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-blue-500" />
                    <span className="text-xs">Typing…</span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="border-t border-slate-200 px-4 py-3 space-y-2">
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt) => (
                  <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="rounded-full border border-primary/30 px-3 py-1 text-xs text-primary transition hover:bg-primary/10"
                >
                  {prompt}
                </button>
              ))}
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Type your message..."
                  className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-2 text-primary-foreground shadow hover:from-blue-700 hover:to-cyan-600 hover:shadow-lg transition disabled:opacity-50"
                  aria-label="Send message"
                  disabled={isLoading}
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              {error ? (
                <p className="text-xs text-amber-600">
                  {error}
                </p>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={toggleOpen}
        className="flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-primary-foreground shadow-2xl hover:from-blue-700 hover:to-cyan-600 hover:shadow-lg transition"
        aria-expanded={isOpen}
        aria-controls="chat-scroll-container"
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
          <MessageCircle className="h-5 w-5" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold">Need help?</p>
          <p className="text-xs text-blue-50/80">Chat with us</p>
        </div>
        {isOpen ? <Minus className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
      </button>
    </div>
  );
}
