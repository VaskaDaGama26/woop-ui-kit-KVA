import type { ProgressBarState } from "../../../components/ProgressBar/types";
import color from "../../atomic/color";

export const stateTokens: Record<
  ProgressBarState,
  { bg: string; trackBg: string; circleBg: string }
> = {
  default: {
    bg: color.accent.violet.primary.light,
    trackBg: color.grayScale.divider.light,
    circleBg: color.grayScale.white,
  },
  hover: {
    bg: color.accent.violet.hover.light,
    trackBg: color.grayScale.divider.light,
    circleBg: color.grayScale.white,
  },
  active: {
    bg: color.accent.violet.click.light,
    trackBg: color.grayScale.divider.light,
    circleBg: color.grayScale.white,
  },
};
