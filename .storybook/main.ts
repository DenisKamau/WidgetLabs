import { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: [ "../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "**/*.html" ],

  addons: [
    "@storybook/addon-designs",
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    // "@storybook/addon-interactions",
    "@storybook/addon-docs",
    "@storybook/addon-mdx-gfm",

  ],

  framework: {
    name: "@storybook/html-vite",
    options: {},
  },

  core: {
    disableWhatsNewNotifications: true
  },

  docs: {

  }
};

export default config;
