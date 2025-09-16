import type { RadioState } from "../../../components/Radio/types";
import color from "../../atomic/color";
import effect from "../../atomic/effect";

export const stateTokens: Record<
  RadioState,
  {
    checked: {
      bg: string;
      border: string;
      boxShadow?: string;
      dotColor: string;
    };
    unchecked: {
      bg: string;
      border: string;
      boxShadow?: string;
    };
  }
> = {
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
      bg: color.backgroundColor.disabled.light,
      border: color.grayScale.text.disabled.light,
      dotColor: color.backgroundColor.disabled.light,
    },
    unchecked: {
      bg: color.backgroundColor.disabled.light,
      border: color.grayScale.text.disabled.light,
    },
  },
};
