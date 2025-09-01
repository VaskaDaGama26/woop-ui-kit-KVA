import type { ButtonSize } from "../../../components/types";
import { spacing } from "../../atomic/spacing";
import { textStyles } from "../../atomic/textStyles";

export const sizeTokens: Record<
  ButtonSize,
  { padding: string; typography: React.CSSProperties }
> = {
  S: {
    padding: `${spacing.xxs} ${spacing.md}`,
    typography: textStyles.btn.S,
  },
  M: {
    padding: `${spacing.xs} ${spacing.lg}`,
    typography: textStyles.btn.M,
  },
  L: {
    padding: `${spacing.sm} ${spacing.lg}`,
    typography: textStyles.btn.L,
  },
};
