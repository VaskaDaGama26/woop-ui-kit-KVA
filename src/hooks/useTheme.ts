import { useThemeContext } from "@context/theme/ThemeContext";
import type { ThemeMode } from "@context/theme/types";

export const useTheme = (overrideTheme?: ThemeMode) => {
  const { theme } = useThemeContext();
  return overrideTheme || theme;
};
