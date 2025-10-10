import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@context": path.resolve(__dirname, "../src/context"),
          "@variables": path.resolve(__dirname, "../src/variables"),
          "@assets": path.resolve(__dirname, "../src/assets"),
          "@styles": path.resolve(__dirname, "../src/styles"),
          "@hooks": path.resolve(__dirname, "../src/hooks"),
        },
      },
    });
  },
};

export default config;
