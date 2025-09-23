import type { BadgeState } from "../../../components/Badge/types";
import color from "../../atomic/color";

export const stateTokens: Record<
  BadgeState,
  { bg: string; color: string; boxShadow?: string; border?: string }
> = {
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
};
