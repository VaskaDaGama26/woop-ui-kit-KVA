import type { ThemeMode } from "@context/theme/types";
import color from "@variables/atomic/color";
import type { LayoutTokens } from "./types";

export const stateTokens: Record<ThemeMode, LayoutTokens> = {
  light: {
    default: {
      bg: color.accent.violet.primary.light,
      color: color.grayScale.white,
    },
    new: {
      bg: color.base.successful.primary.light,
      color: color.grayScale.white,
    },
    active: {
      bg: color.accent.orange.primary.light,
      color: color.grayScale.white,
    },
    disabled: {
      bg: color.grayScale.text.disabled.light,
      color: color.grayScale.white,
    },
    outlined: {
      bg: color.grayScale.white,
      color: color.grayScale.text.secondary.light,
      border: `1px solid ${color.grayScale.stroke.light}`,
    },
  },
  dark: {
    default: {
      bg: color.accent.violet.primary.dark,
      color: color.grayScale.white,
    },
    new: {
      bg: color.base.successful.primary.dark,
      color: color.grayScale.white,
    },
    active: {
      bg: color.accent.orange.primary.dark,
      color: color.grayScale.white,
    },
    disabled: {
      bg: color.grayScale.text.disabled.dark,
      color: color.grayScale.white,
    },
    outlined: {
      bg: color.grayScale.white,
      color: color.grayScale.text.secondary.dark,
      border: `1px solid ${color.grayScale.stroke.dark}`,
    },
  },
};
