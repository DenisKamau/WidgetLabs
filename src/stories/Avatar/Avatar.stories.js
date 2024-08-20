// Avatar.stories.js
import { createAvatar } from './Avatar';

export default {
  title: 'Data Display/Avatar',
  argTypes: {
    src: { control: 'text', defaultValue: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    size: {
      control: 'select',
      options: ['small', 'default', 'large', 6, 8, 10, 12, 14], // Including both string and number options
      defaultValue: 'default',
    },
    shape: { control: 'select', options: ['circle', 'square'], defaultValue: 'circle' },
    classNames: { control: 'text', defaultValue: '' },
    styles: { control: 'object', defaultValue: {} },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  const avatar = createAvatar({ ...args });
  container.appendChild(avatar);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  size: 'default',
  shape: 'circle',
  classNames: '',
  styles: {},
};
