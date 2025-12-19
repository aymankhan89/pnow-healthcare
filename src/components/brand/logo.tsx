import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  variant?: "mark" | "word";
};

export function Logo({ className, variant = "mark" }: LogoProps) {
  if (variant === "word") {
    return (
      <svg
        viewBox="0 0 240 72"
        role="img"
        aria-label="PNOW Healthcare"
        className={cn("h-12 w-auto", className)}
      >
        <defs>
          <linearGradient id="logoWord" x1="0" y1="0" x2="88" y2="88" gradientUnits="userSpaceOnUse">
            <stop stopColor="#242ACD" />
            <stop offset="1" stopColor="#7E83FF" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="64" height="64" rx="20" fill="url(#logoWord)" />
        <path
          d="M26 16h10c9.941 0 18 8.059 18 18s-8.059 18-18 18h-4v14h-6V16Z"
          fill="white"
          opacity="0.95"
        />
        <path d="M32 27h4c6.075 0 11 4.925 11 11s-4.925 11-11 11h-4V27Z" fill="rgba(255,255,255,0.28)" />
        <path d="M20 33c0-3.866 3.134-7 7-7h5v28h-5c-3.866 0-7-3.134-7-7V33Z" fill="white" opacity="0.78" />
        <g fill="#0F172A" opacity="0.92">
          <path d="M92.53 49.6h-6.2V21.2h13.52c6.72 0 10.76 4 10.76 9.72 0 5.92-4.36 9.44-10.84 9.44H92.53V49.6Zm0-13.8h6.56c3.44 0 5.64-1.92 5.64-4.88 0-2.92-2.08-4.88-5.64-4.88H92.53v9.76Z" />
          <path d="M140.91 34.32v15.28h-6.12v-3.76c-1.64 2.6-4.52 4.28-8.28 4.28-6.72 0-11.76-5.16-11.76-11.84 0-6.68 5.04-11.88 11.76-11.88 3.64 0 6.68 1.52 8.32 4.04v-3.6h6.08v7.48Zm-6.2 3.96c0-3.48-2.6-6.12-6.28-6.12-3.56 0-6.16 2.64-6.16 6.12s2.6 6.08 6.16 6.08c3.68 0 6.28-2.6 6.28-6.08Z" />
          <path d="M167.79 34.32v15.28h-6.12v-3.76c-1.64 2.6-4.52 4.28-8.28 4.28-6.72 0-11.76-5.16-11.76-11.84 0-6.68 5.04-11.88 11.76-11.88 3.64 0 6.68 1.52 8.32 4.04v-3.6h6.08v7.48Zm-6.2 3.96c0-3.48-2.6-6.12-6.28-6.12-3.56 0-6.16 2.64-6.16 6.12s2.6 6.08 6.16 6.08c3.68 0 6.28-2.6 6.28-6.08Z" />
          <path d="M176.07 21.2h6.2V49.6h-6.2V21.2Z" />
          <path d="M205.75 43.8c-1.96 3.72-5.72 6.32-10.88 6.32-6.64 0-11.96-5.12-11.96-11.96 0-6.84 5.32-12 11.96-12 4.96 0 8.92 2.4 10.88 6.32l-5.28 2.64c-1.04-2.04-2.96-3.4-5.6-3.4-3.36 0-6 2.68-6 6.44 0 3.68 2.64 6.36 6 6.36 2.64 0 4.56-1.36 5.6-3.4l5.28 2.68Z" />
          <path d="M214.75 49.6h-6.24l12.08-28.4h6.36l12.04 28.4h-6.4l-2.2-5.32h-13.44l-2.2 5.32Zm8.88-21.36-4.48 10.84h8.96l-4.48-10.84Z" />
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 96 96" role="img" aria-label="PNOW monogram" className={cn("h-12 w-12", className)}>
      <defs>
        <linearGradient id="logoMark" x1="12" y1="8" x2="84" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#242ACD" />
          <stop offset="1" stopColor="#7E83FF" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="84" height="84" rx="26" fill="url(#logoMark)" />
      <path d="M32 22h14c13.255 0 24 10.745 24 24s-10.745 24-24 24h-6v14h-8V22Z" fill="white" opacity="0.92" />
      <path d="M40 34h6c6.627 0 12 5.373 12 12s-5.373 12-12 12h-6V34Z" fill="rgba(255,255,255,0.25)" />
      <path d="M22 46c0-4.418 3.582-8 8-8h6v32h-6c-4.418 0-8-3.582-8-8V46Z" fill="white" opacity="0.78" />
    </svg>
  );
}
