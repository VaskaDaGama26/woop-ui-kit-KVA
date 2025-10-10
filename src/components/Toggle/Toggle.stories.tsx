import Toggle from "./Toggle";
import "@styles/globals.css";
import { withThemeProvider } from "@context/theme/ThemeDecorator";

export default {
  title: "Design System/Molecules/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
};

export const Default = {
  args: {},
};
