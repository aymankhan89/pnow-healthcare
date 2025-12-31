"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type MotionPreference = {
  prefersReducedMotion: boolean;
  allowContinuousMotion: boolean;
  allowInteractiveMotion: boolean;
};

export function useMotionPreference(): MotionPreference {
  const rawPrefersReducedMotion = useReducedMotion();
  const prefersReducedMotion = rawPrefersReducedMotion ?? false;
  const [interactiveReady, setInteractiveReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(
      "(min-width: 1024px) and (pointer:fine)"
    );
    const update = () => {
      setInteractiveReady(mediaQuery.matches && !prefersReducedMotion);
    };

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, [prefersReducedMotion]);

  const allowContinuousMotion = !prefersReducedMotion;
  const allowInteractiveMotion = interactiveReady && allowContinuousMotion;

  return {
    prefersReducedMotion,
    allowContinuousMotion,
    allowInteractiveMotion,
  };
}
