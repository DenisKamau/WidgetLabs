import { createTabs } from "./Tabs";

export default {
  title: "Navigation/Tabs",
  tags: ["autodocs"],
  argTypes: {
    selectedTab: { control: "text" },
    tabs: { control: "array" },
    onClick: { action: "clicked" },
    direction: { 
      control: { type: 'select' }, 
      options: ['horizontal', 'vertical'], // Dropdown options for direction
    },
  },
};

const Template = (args) => {
  const tabs = createTabs({ ...args });
  return tabs.outerHTML;
};

export const Default = Template.bind({});
Default.args = {
  selectedTab: "My Account",
  tabs: ["My Account", "Company", "Team Members", "Billing"],
  direction: "horizontal",
};

export const VerticalTabs = Template.bind({});
VerticalTabs.args = {
  selectedTab: "Profile",
  tabs: ["Dashboard", "Profile", "Settings", "Help"],
  direction: "vertical", // Example with vertical direction
};
