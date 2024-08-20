// .storybook/manager.js

import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "dark", // or 'dark' depending on your preference
    brandTitle: "WidgetLab",
    brandUrl: "/",
    brandImage: "../src/logo-light.png", // Ensure this matches the path to your logo
  }),
});

export const externals = {
  "@storybook/addons": true,
};
