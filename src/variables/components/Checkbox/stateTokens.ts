import color from "@variables/atomic/color";
import effect from "@variables/atomic/effect";
import type { LayoutTokens } from "./types";
import type { ThemeMode } from "@context/theme/types";

export const stateTokens: Record<ThemeMode, LayoutTokens> = {
  light: {
    default: {
      checked: {
        bg: color.accent.violet.primary.light,
        border: color.accent.violet.primary.light,
        iconColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.grayScale.stroke.light,
      },
    },
    hover: {
      checked: {
        bg: color.accent.violet.hover.light,
        border: color.accent.violet.hover.light,
        iconColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.accent.violet.hover.light,
      },
    },
    click: {
      checked: {
        bg: color.accent.violet.click.light,
        border: color.accent.violet.click.light,
        iconColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.accent.violet.click.light,
      },
    },
    focus: {
      checked: {
        bg: color.accent.violet.primary.light,
        border: "transparent",
        boxShadow: effect.state.focusBtn,
        iconColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.accent.violet.primary.light,
        boxShadow: effect.state.focusBtn,
      },
    },
    disabled: {
      checked: {
        bg: color.backgroundColor.disabled.light,
        border: color.grayScale.text.disabled.light,
        iconColor: color.grayScale.text.disabled.light,
      },
      unchecked: {
        bg: color.backgroundColor.disabled.light,
        border: color.grayScale.text.disabled.light,
      },
    },
  },
  dark: {
    default: {
      checked: {
        bg: color.accent.violet.primary.dark,
        border: color.accent.violet.primary.dark,
        iconColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.grayScale.stroke.dark,
      },
    },
    hover: {
      checked: {
        bg: color.accent.violet.hover.dark,
        border: color.accent.violet.hover.dark,
        iconColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.accent.violet.hover.dark,
      },
    },
    click: {
      checked: {
        bg: color.accent.violet.click.dark,
        border: color.accent.violet.click.dark,
        iconColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.accent.violet.click.dark,
      },
    },
    focus: {
      checked: {
        bg: color.accent.violet.primary.dark,
        border: "transparent",
        boxShadow: effect.state.focusBtn,
        iconColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.accent.violet.primary.dark,
        boxShadow: effect.state.focusBtn,
      },
    },
    disabled: {
      checked: {
        bg: color.backgroundColor.disabled.dark,
        border: color.grayScale.text.disabled.dark,
        iconColor: color.grayScale.text.disabled.dark,
      },
      unchecked: {
        bg: color.backgroundColor.disabled.dark,
        border: color.grayScale.text.disabled.dark,
      },
    },
  },
};
