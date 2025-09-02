import Button from "./Button";
import "../styles/globals.css";
import type { ButtonSize, ButtonLayout, ButtonState } from "./types";

const sizes = ["S", "M", "L"];
const layouts = ["primary", "secondary", "tertiary"];
const states = ["default", "hover", "click", "focus", "disabled"];

export default {
  title: "Design System/Molecules/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    children: "Action",
  },
};

export const AllButtons = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${sizes.length}, auto)`,
        gap: "50px",
      }}
    >
      {layouts.map((layout) =>
        sizes.map((size) => (
          <div key={`${layout}-${size}`}>
            <strong>
              {layout} / {size}
            </strong>
            <div
              style={{
                display: "flex",
                gap: "10px",
                marginTop: "5px",
              }}
            >
              {states.map((state) => (
                <Button
                  size={size as ButtonSize}
                  layout={layout as ButtonLayout}
                  state={state as ButtonState}
                  key={`${size}-${layout}-${state}`}
                >
                  Action
                </Button>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};
