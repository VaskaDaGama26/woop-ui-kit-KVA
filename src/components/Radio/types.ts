export type RadioState =
  | "default"
  | "hover"
  | "click"
  | "focus"
  | "disabled";

export interface RadioProps {
  state?: RadioState;
  value: string;
  name: string;
}
