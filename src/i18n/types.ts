export type Locale = "en" | "de" | "ar";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "ar", label: "AR" },
];

export const LOCALE_STORAGE_KEY = "locale-preference";
