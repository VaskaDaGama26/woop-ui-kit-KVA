import Rating from "./Rating";
import { withThemeProvider } from "@context/theme/ThemeDecorator";

export default {
  title: "Design System/Molecules/Rating",
  component: Rating,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
};

export const Default = {
  args: {
    count: 5,
    color: "#F6D523",
    size: 200,
  },
};