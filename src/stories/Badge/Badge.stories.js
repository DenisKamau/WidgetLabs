// Badge.stories.js
import { createBadge } from './Badge';

export default {
  title: 'Data Display/Badge',
  argTypes: {
    text: { control: 'text', defaultValue: 'Badge' },
    type: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'warning', 'gray'],
      defaultValue: 'gray',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      defaultValue: 'default',
    },
    removable: { control: 'boolean', defaultValue: false },
    classNames: { control: 'text', defaultValue: '' },
    styles: { control: 'object', defaultValue: {} },
    onRemove: { action: 'removed' },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  const badge = createBadge({ ...args });
  container.appendChild(badge);
  return container;
};

// Grouped by Type
export const Primary = Template.bind({});
Primary.args = {
  text: 'Primary Badge',
  type: 'primary',
  removable: false,
};

export const Success = Template.bind({});
Success.args = {
  text: 'Success Badge',
  type: 'success',
  removable: false,
};

export const Danger = Template.bind({});
Danger.args = {
  text: 'Danger Badge',
  type: 'danger',
  removable: false,
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Warning Badge',
  type: 'warning',
  removable: false,
};

export const Gray = Template.bind({});
Gray.args = {
  text: 'Gray Badge',
  type: 'gray',
  removable: false,
};

// Flat with Remove Button
export const FlatWithRemoveButton = Template.bind({});
FlatWithRemoveButton.args = {
  text: 'Removable Badge',
  type: 'gray',
  removable: true,
};
