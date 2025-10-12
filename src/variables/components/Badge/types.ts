import type { BadgeState } from "@components/Badge/types";

export type TokenValues = {
  bg: string;
  color: string;
  boxShadow?: string;
  border?: string;
};

export type LayoutTokens = Record<
  BadgeState,
  { bg: string; color: string; boxShadow?: string; border?: string }
>;
