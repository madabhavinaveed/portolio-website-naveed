export type ThemePreference = "light" | "dark";

const STORAGE_KEY = "theme-preference";

export function getStoredTheme(): ThemePreference | null {
  try {
    const pref = localStorage.getItem(STORAGE_KEY);
    if (pref === "light" || pref === "dark") return pref;
  } catch {
    // ignore
  }
  return null;
}

export function getSystemTheme(): ThemePreference {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getResolvedTheme(): ThemePreference {
  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: ThemePreference) {
  document.documentElement.setAttribute("data-theme", theme);
}

export function setThemePreference(theme: ThemePreference) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // ignore
  }
  applyTheme(theme);
}

export function toggleTheme(): ThemePreference {
  const next: ThemePreference =
    getResolvedTheme() === "dark" ? "light" : "dark";
  setThemePreference(next);
  return next;
}
