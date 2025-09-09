export type ButtonSize = "L" | "M" | "S";
export type ButtonState =
  | "default"
  | "active"
  | "hover"
  | "click"
  | "focus"
  | "disabled";
export type ButtonLayout = "primary" | "secondary" | "tertiary";
export type ButtonIcon = "left" | "none" | "right" | "icon";
export type ButtonCategory = "standart" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  state?: ButtonState;
  layout?: ButtonLayout;
  icon?: ButtonIcon;
  customIcon?: React.ComponentType<{
    fillIcon?: string;
    fillPath: string;
    width: string;
    height: string;
  }>;
  category?: ButtonCategory;
  children?: React.ReactNode;
}
