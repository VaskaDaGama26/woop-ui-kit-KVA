import type { ButtonState } from "../../../components/types";
import color from "../../atomic/color";
import effect from "../../atomic/effect";

export const stateTokens: Record<
  ButtonState,
  { bg: string; color: string; boxShadow?: string }
> = {
  default: {
    bg: color.accent.violet.primary.light,
    color: color.grayScale.white,
  },
  hover: {
    bg: color.accent.violet.hover.light,
    color: color.grayScale.white,
  },
  click: {
    bg: color.accent.violet.click.light,
    color: color.grayScale.white,
  },
  focus: {
    bg: color.accent.violet.primary.light,
    color: color.grayScale.white,
    boxShadow: effect.state.focusBtn,
  },
  disabled: {
    bg: color.backgroundColor.disabled.light,
    color: color.grayScale.text.disabled.light,
  },
};
