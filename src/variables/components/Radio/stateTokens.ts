import type { ThemeMode } from "@context/theme/types";
import color from "@variables/atomic/color";
import effect from "@variables/atomic/effect";
import type { LayoutTokens } from "./types";

export const stateTokens: Record<ThemeMode, LayoutTokens> = {
  light: {
    default: {
      checked: {
        bg: color.accent.violet.primary.light,
        border: color.accent.violet.primary.light,
        dotColor: color.grayScale.white,
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
        dotColor: color.grayScale.white,
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
        dotColor: color.grayScale.white,
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
        dotColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.accent.violet.primary.light,
        boxShadow: effect.state.focusBtn,
      },
    },
    disabled: {
      checked: {
        bg: color.grayScale.text.disabled.light,
        border: color.grayScale.text.disabled.light,
        dotColor: color.backgroundColor.disabled.light,
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
        dotColor: color.grayScale.white,
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
        dotColor: color.grayScale.white,
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
        dotColor: color.grayScale.white,
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
        dotColor: color.grayScale.white,
      },
      unchecked: {
        bg: "transparent",
        border: color.accent.violet.primary.dark,
        boxShadow: effect.state.focusBtn,
      },
    },
    disabled: {
      checked: {
        bg: color.grayScale.text.disabled.dark,
        border: color.grayScale.text.disabled.dark,
        dotColor: color.backgroundColor.disabled.dark,
      },
      unchecked: {
        bg: color.backgroundColor.disabled.dark,
        border: color.grayScale.text.disabled.dark,
      },
    },
  },
};
