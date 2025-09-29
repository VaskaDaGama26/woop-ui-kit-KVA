export type ProgressBarLayout = "level" | "interval";
export type ProgressBarState = "default" | "hover" | "active";

export interface ProgressBarProps {
  min?: number;
  max?: number;
  step?: number;
  state?: ProgressBarState;
  layout?: ProgressBarLayout;
}
