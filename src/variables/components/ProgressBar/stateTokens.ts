import type { ThemeMode } from "@context/theme/types";
import color from "@variables/atomic/color";
import type { LayoutTokens } from "./types";

export const stateTokens: Record<ThemeMode, LayoutTokens> = {
  light: {
    default: {
      bg: color.accent.violet.primary.light,
      trackBg: color.grayScale.divider.light,
      circleBg: color.grayScale.white,
    },
    hover: {
      bg: color.accent.violet.hover.light,
      trackBg: color.grayScale.divider.light,
      circleBg: color.grayScale.white,
    },
    active: {
      bg: color.accent.violet.click.light,
      trackBg: color.grayScale.divider.light,
      circleBg: color.grayScale.white,
    },
  },
  dark: {
    default: {
      bg: color.accent.violet.primary.dark,
      trackBg: color.grayScale.divider.dark,
      circleBg: color.grayScale.white,
    },
    hover: {
      bg: color.accent.violet.hover.dark,
      trackBg: color.grayScale.divider.dark,
      circleBg: color.grayScale.white,
    },
    active: {
      bg: color.accent.violet.click.dark,
      trackBg: color.grayScale.divider.dark,
      circleBg: color.grayScale.white,
    },
  },
};
