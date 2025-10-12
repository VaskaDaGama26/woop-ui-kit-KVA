import type {
  ButtonLayout,
  ButtonState,
} from "@components/Button/types";

export type TokenValues = {
  bg: string;
  color: string;
  boxShadow?: string;
  border?: string;
};

export type LayoutTokens = Record<
  ButtonLayout,
  Record<
    ButtonState,
    { bg: string; color: string; boxShadow?: string; border?: string }
  >
>;
