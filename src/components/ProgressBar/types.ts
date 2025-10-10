export type ProgressBarState = "default" | "hover" | "active";

export interface ProgressBarProps {
  min?: number;
  max?: number;
  step?: number;
  state?: ProgressBarState;
}
