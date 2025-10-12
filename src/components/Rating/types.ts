export type RatingState = "active" | "inactive" | "hover";

export interface RatingProps {
  count: number;
  size?: number;
  state?: RatingState;
}
