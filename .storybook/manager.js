// .storybook/manager.js

import { addons } from "@storybook/addons";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "dark", // or 'light' depending on your preference
    brandTitle: "WidgetLab",
    brandUrl: "/",
    brandImage: "/images/logo-light.png",
  }),
});

export const externals = {
  "@storybook/addons": true,
};
