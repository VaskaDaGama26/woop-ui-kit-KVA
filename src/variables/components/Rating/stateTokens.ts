import type { ThemeMode } from "@context/theme/types";
import color from "@variables/atomic/color";
import type { RatingState } from "./types";

export const stateTokens: Record<ThemeMode, RatingState> = {
  light: {
    active: color.base.attention.primary.dark,
    inactive: color.backgroundColor.disabled.light,
    hover: color.base.attention.hover.dark,
  },
  dark: {
    active: color.base.attention.primary.dark,
    inactive: color.backgroundColor.disabled.light,
    hover: color.base.attention.hover.dark,
  },
};
