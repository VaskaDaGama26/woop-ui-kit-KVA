import type { AvatarType } from "../../../components/Avatar/types";
import color from "../../atomic/color";

export const stateTokens: Record<
  AvatarType,
  { bg: string; color: string }
> = {
  photo: {
    bg: color.grayScale.white,
    color: color.grayScale.white,
  },
  initials: {
    bg: color.accent.orange.primary.light,
    color: color.grayScale.white,
  },
  empty: {
    bg: color.backgroundColor.disabled.light,
    color: color.grayScale.white,
  },
  add: {
    bg: color.accent.violet.quaternary.light,
    color: color.grayScale.white,
  },
};
