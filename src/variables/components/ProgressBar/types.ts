import type { ProgressBarState } from "@components/ProgressBar/types";

export type TokenValues = {
  bg: string;
  trackBg: string;
  circleBg: string;
};

export type LayoutTokens = Record<ProgressBarState, TokenValues>;
