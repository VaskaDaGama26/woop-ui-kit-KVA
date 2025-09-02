export type ButtonSize = "L" | "M" | "S";
export type ButtonState =
  | "default"
  | "hover"
  | "click"
  | "focus"
  | "disabled";
export type ButtonLayout = "primary" | "secondary" | "tertiary";
export type ButtonIcon = "left" | "none" | "right";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  state?: ButtonState;
  layout?: ButtonLayout;
  icon?: ButtonIcon;
  children: React.ReactNode;
}
