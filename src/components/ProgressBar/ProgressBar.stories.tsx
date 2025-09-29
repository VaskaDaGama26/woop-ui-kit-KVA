import ProgressBar from "./ProgressBar";
import "../../styles/globals.css";
import type { ProgressBarProps, ProgressBarState } from "./types";

export default {
  title: "Design System/Molecules/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
};

const states: ProgressBarState[] = ["default", "hover", "active"];

export const Default = (args: ProgressBarProps) => {
  return (
    <div style={{ width: "200px" }}>
      <ProgressBar {...args} />
    </div>
  );
};

Default.args = {
  state: "default",
};

export const AllStates = () => {
  return (
    <div
      style={{
        width: "200px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {states.map((state) => (
        <ProgressBar state={state} />
      ))}
    </div>
  );
};
