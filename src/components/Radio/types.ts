export type RadioState =
  | "default"
  | "hover"
  | "click"
  | "focus"
  | "disabled";

export interface RadioProps {
  value: string;
  name: string;
  state?: RadioState;
  selectedValue: string | null;
  onChange: (value: string) => void;
}
