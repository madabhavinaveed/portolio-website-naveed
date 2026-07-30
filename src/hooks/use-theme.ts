import { useEffect, useState } from "react";
import {
  applyTheme,
  getResolvedTheme,
  toggleTheme as toggleThemePreference,
  type ThemePreference,
} from "@/lib/theme";

export function useTheme() {
  const [theme, setTheme] = useState<ThemePreference>(() =>
    typeof window === "undefined" ? "light" : getResolvedTheme()
  );

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    const next = toggleThemePreference();
    setTheme(next);
  };

  return { theme, toggleTheme };
}
