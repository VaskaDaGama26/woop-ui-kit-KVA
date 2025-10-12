import color from "@variables/atomic/color";
import { textStyles } from "@variables/atomic/textStyles";

export const stateTokens = {
  notLast: {
    typography: textStyles.text.M.regular,
    color: color.grayScale.text.secondary.light,
  },
  last: {
    typography: textStyles.text.M.bold,
    color: color.grayScale.text.primary.light,
  },
};
