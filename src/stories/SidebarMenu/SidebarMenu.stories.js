import { createSidebarMenu } from './SidebarMenu';

export default {
  title: 'Navigation/SidebarMenu',
};

const Template = () => {
  const sidebarMenu = createSidebarMenu();
  return sidebarMenu.outerHTML; // Return the HTML for Storybook to render
};

export const Default = Template.bind({});
