export type ToggleState =
  | "default"
  | "hover"
  | "focus"
  | "disabled";

export type ToggleLayout = "primary" | "boolean";

export interface ToggleProps {
  state?: ToggleState;
  layout?: ToggleLayout;
}
