import type { CheckboxState } from "@components/Checkbox/types";

export type TokenValues = {
  checked: {
    bg: string;
    border: string;
    boxShadow?: string;
    iconColor: string;
  };
  unchecked: {
    bg: string;
    border: string;
    boxShadow?: string;
  };
};

export type LayoutTokens = Record<CheckboxState, TokenValues>;
