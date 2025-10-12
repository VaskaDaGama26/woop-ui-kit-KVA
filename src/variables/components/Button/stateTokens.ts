import color from "@variables/atomic/color";
import effect from "@variables/atomic/effect";
import type { LayoutTokens } from "./types";
import type { ThemeMode } from "@context/theme/types";

export const stateTokens: Record<ThemeMode, LayoutTokens> = {
  light: {
    primary: {
      default: {
        bg: color.accent.violet.primary.light,
        color: color.grayScale.white,
      },
      active: {
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
      active: {
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
      active: {
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
  },
  dark: {
    primary: {
      default: {
        bg: color.accent.violet.primary.dark,
        color: color.grayScale.white,
      },
      active: {
        bg: color.accent.violet.primary.dark,
        color: color.grayScale.white,
      },
      hover: {
        bg: color.accent.violet.hover.dark,
        color: color.grayScale.white,
      },
      click: {
        bg: color.accent.violet.click.dark,
        color: color.grayScale.white,
      },
      focus: {
        bg: color.accent.violet.primary.dark,
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
        bg: color.accent.violet.quaternary.dark,
        color: color.accent.violet.primary.dark,
      },
      active: {
        bg: color.accent.violet.quaternary.dark,
        color: color.accent.violet.primary.dark,
      },
      hover: {
        bg: color.accent.violet.hover.dark,
        color: color.grayScale.white,
      },
      click: {
        bg: color.accent.violet.click.dark,
        color: color.grayScale.white,
      },
      focus: {
        bg: color.accent.violet.quaternary.dark,
        color: color.accent.violet.primary.dark,
        boxShadow: effect.state.focusBtn,
      },
      disabled: {
        bg: color.backgroundColor.disabled.dark,
        color: color.grayScale.text.disabled.dark,
      },
    },
    tertiary: {
      default: {
        bg: "none",
        color: color.accent.violet.primary.dark,
      },
      active: {
        bg: "none",
        color: color.accent.violet.primary.dark,
      },
      hover: {
        bg: "none",
        color: color.accent.violet.hover.dark,
        boxShadow: effect.dropShadow.Z100.dark,
      },
      click: {
        bg: "none",
        color: color.accent.violet.click.dark,
        boxShadow: effect.dropShadow.Z100.dark,
      },
      focus: {
        bg: "none",
        color: color.accent.violet.click.dark,
        border: `1px solid ${color.accent.orange.primary.dark}`,
      },
      disabled: {
        bg: "none",
        color: color.grayScale.text.disabled.dark,
      },
    },
  },
};
