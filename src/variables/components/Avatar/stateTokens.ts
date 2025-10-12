import type { ThemeMode } from "@context/theme/types";
import color from "@variables/atomic/color";
import type { LayoutTokens } from "./types";

export const stateTokens: Record<ThemeMode, LayoutTokens> = {
  light: {
    photo: {
      bg: color.grayScale.white,
      color: color.grayScale.white,
    },
    initials: {
      bg: color.accent.orange.primary.light,
      color: color.grayScale.white,
    },
    empty: {
      bg: color.backgroundColor.disabled.light,
      color: color.grayScale.white,
    },
    add: {
      bg: color.accent.violet.quaternary.light,
      color: color.grayScale.white,
    },
  },
  dark: {
    photo: {
      bg: color.grayScale.white,
      color: color.grayScale.white,
    },
    initials: {
      bg: color.accent.orange.primary.dark,
      color: color.grayScale.white,
    },
    empty: {
      bg: color.backgroundColor.disabled.dark,
      color: color.grayScale.white,
    },
    add: {
      bg: color.accent.violet.quaternary.dark,
      color: color.grayScale.white,
    },
  },
};
