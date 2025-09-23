import type {
  ToggleState,
  ToggleLayout,
} from "../../../components/Toggle/types";
import color from "../../atomic/color";
import { backgroundColor } from "../../atomic/color/background";
import effect from "../../atomic/effect";

export const stateTokens: Record<
  ToggleLayout,
  Record<
    ToggleState,
    {
      checked: {
        bg: string;
        color: string;
        boxShadow?: string;
        fillPath?: string;
      };
      unchecked: {
        bg: string;
        color: string;
        boxShadow?: string;
        fillPath?: string;
      };
    }
  >
> = {
  primary: {
    default: {
      checked: {
        bg: color.accent.violet.primary.light,
        color: color.grayScale.white,
      },
      unchecked: {
        bg: color.accent.violet.quaternary.light,
        color: color.grayScale.white,
      },
    },
    hover: {
      checked: {
        bg: color.accent.violet.hover.light,
        color: color.grayScale.white,
      },
      unchecked: {
        bg: color.accent.violet.tertiary.light,
        color: color.grayScale.white,
      },
    },
    focus: {
      checked: {
        bg: color.accent.violet.primary.light,
        color: color.grayScale.white,
        boxShadow: effect.state.focusBtn,
      },
      unchecked: {
        bg: color.accent.violet.quaternary.light,
        color: color.grayScale.white,
        boxShadow: effect.state.focusBtn,
      },
    },
    disabled: {
      checked: {
        bg: color.backgroundColor.disabled.light,
        color: color.grayScale.white,
      },
      unchecked: {
        bg: color.backgroundColor.disabled.light,
        color: color.grayScale.white,
      },
    },
  },
  boolean: {
    default: {
      checked: {
        bg: color.base.successful.primary.light,
        color: color.grayScale.white,
        fillPath: color.base.successful.primary.light,
      },
      unchecked: {
        bg: color.base.error.primary.light,
        color: color.grayScale.white,
        fillPath: color.base.error.primary.light,
      },
    },
    hover: {
      checked: {
        bg: color.base.successful.hover.light,
        color: color.grayScale.white,
        fillPath: color.base.successful.hover.light,
      },
      unchecked: {
        bg: color.base.error.hover.light,
        color: color.grayScale.white,
        fillPath: color.base.error.hover.light,
      },
    },
    focus: {
      checked: {
        bg: color.base.successful.primary.light,
        color: color.grayScale.white,
        fillPath: color.base.successful.primary.light,
        boxShadow: effect.state.focusBtn,
      },
      unchecked: {
        bg: color.base.error.primary.light,
        color: color.grayScale.white,
        boxShadow: effect.state.focusBtn,
        fillPath: color.base.error.primary.light,
      },
    },
    disabled: {
      checked: {
        bg: color.backgroundColor.disabled.light,
        color: color.grayScale.white,
        fillPath: color.grayScale.text.disabled.light,
      },
      unchecked: {
        bg: color.backgroundColor.disabled.light,
        color: color.grayScale.white,
        fillPath: color.grayScale.text.disabled.light,
      },
    },
  },
  theme: {
    default: {
      checked: {
        bg: color.grayScale.divider.dark,
        color: backgroundColor.lighten.dark,
        fillPath: color.base.attention.primary.light,
      },
      unchecked: {
        bg: color.grayScale.divider.light,
        color: backgroundColor.lighten.light,
        fillPath: color.base.attention.primary.light,
      },
    },
    hover: {
      checked: {
        bg: color.grayScale.divider.dark,
        color: backgroundColor.lighten.dark,
        fillPath: color.base.attention.primary.light,
      },
      unchecked: {
        bg: color.grayScale.divider.light,
        color: backgroundColor.lighten.light,
        fillPath: color.base.attention.primary.light,
      },
    },
    focus: {
      checked: {
        bg: color.grayScale.divider.dark,
        color: backgroundColor.lighten.dark,
        fillPath: color.base.attention.primary.light,
        boxShadow: effect.state.focusBtn,
      },
      unchecked: {
        bg: color.grayScale.divider.light,
        color: backgroundColor.lighten.light,
        fillPath: color.base.attention.primary.light,
        boxShadow: effect.state.focusBtn,
      },
    },
    disabled: {
      checked: {
        bg: color.backgroundColor.disabled.light,
        color: color.grayScale.white,
        fillPath: color.grayScale.text.disabled.light,
      },
      unchecked: {
        bg: color.backgroundColor.disabled.light,
        color: color.grayScale.white,
        fillPath: color.grayScale.text.disabled.light,
      },
    },
  },
};
