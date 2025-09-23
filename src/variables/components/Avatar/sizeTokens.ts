import type { AvatarSize } from "../../../components/Avatar/types";
import color from "../../atomic/color";
import { textStyles } from "../../atomic/textStyles";

export const sizeTokens: Record<
  AvatarSize,
  {
    sizes: { width: number; height: number };
    typography: React.CSSProperties;
    icon: { width: number; height: number };

    indicatorColor: { online: string; offline: string };
    indicatorSizes: {
      width: number;
      height: number;
      border: string;
      bottom: string;
      right: string;
    };
  }
> = {
  XL: {
    sizes: {
      width: 56,
      height: 56,
    },
    typography: textStyles.headlines.subTitle2.desktop,
    icon: {
      width: 32,
      height: 32,
    },
    indicatorSizes: {
      width: 12,
      height: 12,
      border: `2px solid ${color.grayScale.white}`,

      bottom: "-2px",
      right: "-2px",
    },
    indicatorColor: {
      online: color.base.successful.primary.light,
      offline: color.base.error.primary.light,
    },
  },
  L: {
    sizes: {
      width: 48,
      height: 48,
    },
    typography: textStyles.headlines.subTitle2.desktop,
    icon: {
      width: 24,
      height: 24,
    },
    indicatorSizes: {
      width: 12,
      height: 12,
      border: `2px solid ${color.grayScale.white}`,

      bottom: "-2px",
      right: "-2px",
    },
    indicatorColor: {
      online: color.base.successful.primary.light,
      offline: color.base.error.primary.light,
    },
  },
  M: {
    sizes: {
      width: 32,
      height: 32,
    },
    typography: textStyles.text.M.bold,
    icon: {
      width: 16,
      height: 16,
    },
    indicatorSizes: {
      width: 6,
      height: 6,
      border: `1px solid ${color.grayScale.white}`,

      bottom: "-1px",
      right: "-1px",
    },
    indicatorColor: {
      online: color.base.successful.primary.light,
      offline: color.base.error.primary.light,
    },
  },
  S: {
    sizes: {
      width: 24,
      height: 24,
    },
    typography: textStyles.text.XS.bold,
    icon: {
      width: 12,
      height: 12,
    },
    indicatorSizes: {
      width: 6,
      height: 6,
      border: `1px solid ${color.grayScale.white}`,
      bottom: "-1px",
      right: "-1px",
    },
    indicatorColor: {
      online: color.base.successful.primary.light,
      offline: color.base.error.primary.light,
    },
  },
};
