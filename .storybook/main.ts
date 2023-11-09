import type { StorybookConfig } from "@storybook/react-vite";
import { withoutVitePlugins } from "@storybook/builder-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: { name: "@storybook/react-vite", options: {} },
  docs: { autodocs: "tag" },
  typescript: { reactDocgen: "react-docgen" },
  core: { builder: "@storybook/builder-vite" },
  staticDirs: ["./assets"],
  viteFinal: async (config, { configType }) => {
    return mergeConfig(
      {
        ...config,
        plugins: await withoutVitePlugins(config.plugins, [
          "vite:lib-inject-css",
          "vite:dts",
        ]),
      },
      {
        resolve: {
          // in storybook you can use import { SomeComponent } from "@lib"
          // in development this will pull it from the lib folder
          // during build it will pull from the dist folder
          alias: {
            "@lib":
              configType === "DEVELOPMENT"
                ? "../src/lib"
                : "./dist/vite-storybook-lib.js",
          },
        },
      }
    );
  },
};
export default config;
