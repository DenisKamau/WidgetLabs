import { createDropdown } from './Dropdown';

export default {
  title: 'Navigation/Dropdown',
  component: createDropdown,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover'],
    },
    overlay: { control: 'object' },
    disabled: { control: 'boolean' },
    overlayClassName: { control: 'text' },
    onVisibleChange: { action: 'visibleChanged' },
  },
};

const Template = (args) => {
  const dropdown = createDropdown({ ...args });
  return dropdown.outerHTML; // Return HTML string for Storybook to render
};

export const Default = Template.bind({});
Default.args = {
  trigger: 'click',
  overlay: [
    { type: 'link', label: 'Account settings', href: '#' },
    { type: 'link', label: 'Support', href: '#' },
    { type: 'link', label: 'License', href: '#' },
    { type: 'button', label: 'Sign out', onClick: () => alert('Signed out!') },
  ],
  disabled: false,
  overlayClassName: '',
  onVisibleChange: (visible) => console.log('Dropdown is now', visible ? 'visible' : 'hidden'),
};

export const HoverTrigger = Template.bind({});
HoverTrigger.args = {
  trigger: 'hover',
  overlay: [
    { type: 'link', label: 'Account settings', href: '#' },
    { type: 'link', label: 'Support', href: '#' },
    { type: 'link', label: 'License', href: '#' },
    { type: 'button', label: 'Sign out', onClick: () => alert('Signed out!') },
  ],
  disabled: false,
  overlayClassName: '',
  arrow: true,
  onVisibleChange: (visible) => console.log('Dropdown is now', visible ? 'visible' : 'hidden'),
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  trigger: 'click',
  overlay: [
    { type: 'link', label: 'Account settings', href: '#' },
    { type: 'link', label: 'Support', href: '#' },
    { type: 'link', label: 'License', href: '#' },
    { type: 'button', label: 'Sign out', onClick: () => alert('Signed out!') },
  ],
  disabled: true,
  overlayClassName: '',
  arrow: false,
};
