import { createButton } from './Button';

export default {
  title: 'General/Buttons',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/w6S7R8OleB1I3y9Wv51UTA/%E2%9D%96-VCF---Untitled-UI-%E2%80%93-PRO-(v3.1)?node-id=10356-2882&t=Gd4tHyVKXRQQkMsF-1',
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'outlined', 'error', 'link', 'ghost'],
    },
    borderRadius: {
      control: { type: 'select' },
      options: [
        'rounded-none',
        'rounded-sm',
        'rounded',
        'rounded-md',
        'rounded-lg',
        'rounded-xl',
        'rounded-2xl',
        'rounded-3xl',
        'rounded-full',
      ],
    },
    border: {
      control: { type: 'select' },
      options: ['border', 'border-2', 'border-4', 'border-8'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    icon: { control: 'text' },
    classNames: { control: 'text' },
    styles: { control: 'object' },
    type: {
      control: { type: 'select' },
      options: ['button', 'link'],
    },
    href: { control: 'text' },
  },
};

const Template = (args) => {
  const button = createButton({ ...args });
  return button.outerHTML;
};

// Story for Primary Button
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  label: 'Primary Button',
  border: 'border',
  borderRadius: 'rounded-lg',
  disabled: false,
  loading: false,
  type: 'button',
  styles: {},
};

// Story for Secondary Button
export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
  label: 'Secondary Button',
  border: 'border',
  borderRadius: 'rounded-lg',
  disabled: false,
  loading: false,
  type: 'button',
  styles: {},
};

// Story for Outlined Button
export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  size: 'medium',
  label: 'Outlined Button',
  border: 'border',
  borderRadius: 'rounded-lg',
  disabled: false,
  loading: false,
  type: 'button',
  styles: {},
};

// Story for Error Button
export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  size: 'medium',
  label: 'Error Button',
  border: 'border',
  borderRadius: 'rounded-lg',
  disabled: false,
  loading: false,
  type: 'button',
  styles: {},
};

// Story for Link Button
export const Link = Template.bind({});
Link.args = {
  variant: 'link',
  size: 'medium',
  label: 'Link Button',
  border: 'border-none',
  borderRadius: 'rounded-lg',
  disabled: false,
  loading: false,
  type: 'link', // Ensures this is an anchor tag with an href
  href: '#', // Default href
  classNames: '!p-0', // Remove padding for link buttons if desired
  styles: {},
};

// Story for Ghost Button
export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'medium',
  label: 'Ghost Button',
  border: 'border',
  borderRadius: 'rounded-lg',
  disabled: false,
  loading: false,
  type: 'button',
  styles: {},
};
