import type { ToggleState } from "../../../components/Toggle/types";

export type TokenValues = {
  checked: {
    bg: string;
    color: string;
    boxShadow?: string;
    fillPath?: string;
  };
  unchecked: {
    bg: string;
    color: string;
    boxShadow?: string;
    fillPath?: string;
  };
};

export type LayoutTokens = Record<ToggleState, TokenValues>;
