import { withThemeProvider } from "@context/theme/ThemeDecorator";
import Checkbox from "./Checkbox";
import "@styles/globals.css";

export default {
  title: "Design System/Molecules/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  decorators: [withThemeProvider],
};

export const Default = {
  args: {
    state: "default",
    value: "test",
  },
};

export const ThreeCheckboxes = () => {

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: "6px" }}
    >
      {["1", "2", "3"].map((val) => (
        <Checkbox key={val} value={val} />
      ))}
    </div>
  );
};
