export type BadgeState =
  | "default"
  | "new"
  | "active"
  | "disabled"
  | "outlined";
export type BadgeSize = "M" | "S";

export interface BadgeProps {
  state?: BadgeState;
  size?: BadgeSize;
  children?: React.ReactNode;
}
