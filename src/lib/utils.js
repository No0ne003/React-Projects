import { useTheme } from "@/components/theme-provider";
import { clsx } from "clsx";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function useWhatTheme() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "system") {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)")?.matches
          ? "dark"
          : "light",
      );
    }
  });

  return { theme };
}
