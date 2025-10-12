export type ThemeMode = "light" | "dark";

export interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (mode: ThemeMode | undefined) => void;
}
