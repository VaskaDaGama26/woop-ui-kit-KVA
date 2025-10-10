import React from "react";
import { ThemeProvider } from "./ThemeContext";

export const withThemeProvider = (Story: React.ComponentType) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);
