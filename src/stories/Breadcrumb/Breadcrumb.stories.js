import { createBreadcrumb } from './Breadcrumb';

export default {
  title: 'Navigation/Breadcrumb',
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
    separator: {
      control: { type: 'select' },
      options: ['chevron', '/'], // Options for separator
    },
  },
};

const Template = (args) => {
  const breadcrumb = createBreadcrumb({ ...args });
  return breadcrumb.outerHTML; // Return HTML string for Storybook to render
};

export const Default = Template.bind({});
Default.args = {
  items: [
    { href: '/individual/etims/lpo', label: 'local purchase orders' },
    { href: '#', label: 'create local purchase order' },
  ],
  separator: 'chevron', // Default separator
};

export const SlashSeparator = Template.bind({});
SlashSeparator.args = {
  items: [
    { href: '/individual/etims/lpo', label: 'local purchase orders' },
    { href: '#', label: 'create local purchase order' },
  ],
  separator: '/', // Slash separator
};

export const LongBreadcrumb = Template.bind({});
LongBreadcrumb.args = {
  items: [
    { href: '/home', label: 'Home' },
    { href: '/category', label: 'Category' },
    { href: '/subcategory', label: 'Subcategory' },
    { href: '/product', label: 'Product' },
    { href: '/details', label: 'Details' },
  ],
  separator: 'chevron', // Default separator
};
