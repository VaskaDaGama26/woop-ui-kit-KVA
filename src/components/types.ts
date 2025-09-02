export type ButtonSize = "L" | "M" | "S";
export type ButtonState =
  | "default"
  | "hover"
  | "click"
  | "focus"
  | "disabled";
export type ButtonLayout = "primary" | "secondary" | "tertiary";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  state?: ButtonState;
  layout?: ButtonLayout;
  children: React.ReactNode;
}
