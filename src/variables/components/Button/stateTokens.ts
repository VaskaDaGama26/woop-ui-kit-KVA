import type {
  ButtonState,
  ButtonType,
} from "../../../components/types";
import color from "../../atomic/color";
import effect from "../../atomic/effect";

export const stateTokens: Record<
  ButtonType,
  Record<
    ButtonState,
    { bg: string; color: string; boxShadow?: string; border?: string }
  >
> = {
  primary: {
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
  },
  secondary: {
    default: {
      bg: color.accent.violet.quaternary.light,
      color: color.accent.violet.primary.light,
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
      bg: color.accent.violet.quaternary.light,
      color: color.accent.violet.primary.light,
      boxShadow: effect.state.focusBtn,
    },
    disabled: {
      bg: color.backgroundColor.disabled.light,
      color: color.grayScale.text.disabled.light,
    },
  },
  tertiary: {
    default: {
      bg: "none",
      color: color.accent.violet.primary.light,
    },
    hover: {
      bg: "none",
      color: color.accent.violet.hover.light,
      boxShadow: effect.dropShadow.Z100.light,
    },
    click: {
      bg: "none",
      color: color.accent.violet.click.light,
      boxShadow: effect.dropShadow.Z100.light,
    },
    focus: {
      bg: "none",
      color: color.accent.violet.click.light,
      border: `1px solid ${color.accent.orange.primary.light}`,
    },
    disabled: {
      bg: "none",
      color: color.grayScale.text.disabled.light,
    },
  },
};
