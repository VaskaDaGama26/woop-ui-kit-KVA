export type ToggleState =
  | "default"
  | "hover"
  | "focus"
  | "disabled";

export type ToggleLayout = "primary" | "boolean" | "theme";

export interface ToggleProps {
  state?: ToggleState;
  layout?: ToggleLayout;
}
