import type { Metadata } from "next";
import "./globals.css";
import SiteNavbar from "@/components/sections/navbar";
import { SiteFooter } from "@/components/sections/footer";
import { ChatWidget } from "@/components/chat/chat-widget";

export const metadata: Metadata = {
  title: "PNOW Healthcare",
  description:
    "Hybrid healthcare platform delivering virtual-first primary care, chronic care management, and navigation for modern teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SiteNavbar />
        {children}
        <ChatWidget />
        <SiteFooter />
      </body>
    </html>
  );
}
