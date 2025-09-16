import type { CheckboxState } from "../../../components/Checkbox/types";
import color from "../../atomic/color";
import effect from "../../atomic/effect";

export const stateTokens: Record<
  CheckboxState,
  {
    checked: {
      bg: string;
      border: string;
      boxShadow?: string;
      iconColor: string;
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
};
