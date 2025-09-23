import type { BadgeSize } from "../../../components/Badge/types";
import { spacing } from "../../atomic/spacing";
import { textStyles } from "../../atomic/textStyles";

export const sizeTokens: Record<
  BadgeSize,
  {
    padding: string;
    typography: React.CSSProperties;
  }
> = {
  M: {
    padding: `${spacing.xxxxs} ${spacing.xxs}`,
    typography: textStyles.text.S.bold,
  },
  S: {
    padding: `${spacing.xxxxs} ${spacing.xxxs}`,
    typography: textStyles.text.XS.bold,
  },
};
