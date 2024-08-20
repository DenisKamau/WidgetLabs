// Input.stories.js
import { createInput } from './Input';

export default {
  title: 'Forms/Input',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text', defaultValue: 'Email' },
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'url',
        'tel',
        'date',
        'time',
        'datetime-local',
        'month',
        'week',
        'search',
        'color',
        'range',
      ],
      defaultValue: 'email',
    },
    placeholder: { control: 'text', defaultValue: 'you@example.com' },
    disabled: { control: 'boolean', defaultValue: false },
    min: { control: 'text', defaultValue: null },
    max: { control: 'text', defaultValue: null },
    readonly: { control: 'boolean', defaultValue: false },
    required: { control: 'boolean', defaultValue: false },
    classNames: { control: 'text', defaultValue: '' },
    styles: { control: 'object', defaultValue: {} },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  const input = createInput({ ...args });
  container.appendChild(input);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
  type: 'email',
  placeholder: 'you@example.com',
  disabled: false,
  readonly: false,
  required: false,
  classNames: '',
  styles: {},
};
