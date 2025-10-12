import type { RadioState } from "@components/Radio/types";

export type TokenValues = {
  checked: {
    bg: string;
    border: string;
    boxShadow?: string;
    dotColor: string;
  };
  unchecked: {
    bg: string;
    border: string;
    boxShadow?: string;
  };
};

export type LayoutTokens = Record<RadioState, TokenValues>;
