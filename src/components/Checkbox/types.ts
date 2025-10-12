export type CheckboxState =
  | "default"
  | "hover"
  | "click"
  | "focus"
  | "disabled";

export interface CheckboxProps {
  state?: CheckboxState;
  value: string;
}
