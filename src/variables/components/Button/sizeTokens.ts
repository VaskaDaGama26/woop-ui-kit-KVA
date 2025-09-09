import type { ButtonSize } from "../../../components/Button/types";
import { spacing } from "../../atomic/spacing";
import { textStyles } from "../../atomic/textStyles";

export const standartSizeTokens: Record<
  ButtonSize,
  {
    padding: string;
    typography: React.CSSProperties;
    icon: { width: number; height: number };
  }
> = {
  S: {
    padding: `${spacing.xxs} ${spacing.md}`,
    typography: textStyles.btn.S,
    icon: { width: 16, height: 16 },
  },
  M: {
    padding: `${spacing.xs} ${spacing.lg}`,
    typography: textStyles.btn.M,
    icon: { width: 24, height: 24 },
  },
  L: {
    padding: `${spacing.sm} ${spacing.lg}`,
    typography: textStyles.btn.L,
    icon: { width: 24, height: 24 },
  },
};

export const iconSizeTokens: Record<
  ButtonSize,
  {
    padding: string;
    typography: React.CSSProperties;
    icon: { width: number; height: number };
  }
> = {
  S: {
    padding: `${spacing.xxs}`,
    typography: textStyles.btn.S,
    icon: { width: 16, height: 16 },
  },
  M: {
    padding: `${spacing.xs}`,
    typography: textStyles.btn.M,
    icon: { width: 24, height: 24 },
  },
  L: {
    padding: `${spacing.sm}`,
    typography: textStyles.btn.L,
    icon: { width: 24, height: 24 },
  },
};
