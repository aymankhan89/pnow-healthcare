"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  "https://calendly.com/pnowhealth/free-consultation";

let calendlyCssPromise: Promise<void> | null = null;
let calendlyScriptPromise: Promise<void> | null = null;

const loadCalendlyCss = () => {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (calendlyCssPromise) {
    return calendlyCssPromise;
  }

  const existingLink = document.querySelector<HTMLLinkElement>('link[data-calendly="widget-css"]');
  if (existingLink) {
    calendlyCssPromise = new Promise((resolve, reject) => {
      if (existingLink.sheet) {
        resolve();
        return;
      }

      existingLink.addEventListener("load", () => resolve(), { once: true });
      existingLink.addEventListener("error", () => reject(new Error("Calendly stylesheet failed to load")), {
        once: true,
      });
    });
    return calendlyCssPromise;
  }

  calendlyCssPromise = new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = CALENDLY_WIDGET_CSS;
    link.dataset.calendly = "widget-css";
    link.onload = () => resolve();
    link.onerror = () => reject(new Error("Calendly stylesheet failed to load"));
    document.head.appendChild(link);
  });

  return calendlyCssPromise;
};

const loadCalendlyScript = () => {
  if (typeof window === "undefined" || window.Calendly) {
    return Promise.resolve();
  }

  if (calendlyScriptPromise) {
    return calendlyScriptPromise;
  }

  const existingScript = document.querySelector<HTMLScriptElement>('script[data-calendly="widget"]');
  if (existingScript) {
    calendlyScriptPromise = new Promise((resolve, reject) => {
      if (existingScript.dataset.loaded === "true") {
        resolve();
        return;
      }

      existingScript.addEventListener("load", () => {
        existingScript.dataset.loaded = "true";
        resolve();
      });
      existingScript.addEventListener("error", () => reject(new Error("Calendly widget failed to load")));
    });
    return calendlyScriptPromise;
  }

  calendlyScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = CALENDLY_WIDGET_SRC;
    script.async = true;
    script.dataset.calendly = "widget";
    script.onload = () => {
      script.dataset.loaded = "true";
      resolve();
    };
    script.onerror = () => reject(new Error("Calendly widget failed to load"));
    document.body.appendChild(script);
  });

  return calendlyScriptPromise;
};

const loadCalendlyWidget = () => Promise.all([loadCalendlyCss(), loadCalendlyScript()]).then(() => {});

export const preloadCalendly = () =>
  loadCalendlyWidget().catch((error) => {
    console.warn("Calendly preload failed; will retry on click.", error);
  });

export const triggerCalendlyPopup = async (url: string = CALENDLY_URL) => {
  if (!url) return;

  try {
    await loadCalendlyWidget();
    if (window.Calendly?.initPopupWidget) {
      window.Calendly.initPopupWidget({ url });
    } else {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  } catch (error) {
    console.error("Calendly popup failed, redirecting instead.", error);
    window.open(url, "_blank", "noopener,noreferrer");
  }
};
