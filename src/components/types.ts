export type ButtonSize = "L" | "M" | "S";
export type ButtonState =
  | "default"
  | "hover"
  | "click"
  | "focus"
  | "disabled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  state?: ButtonState;
  children: React.ReactNode;
}
