// Toggle.stories.js
import { createToggle } from './Toggle';

export default {
  title: 'Forms/Toggle',
  argTypes: {
    label: { control: 'text', defaultValue: 'Use setting' },
    isEnabled: { control: 'boolean', defaultValue: false },
    onToggle: { action: 'toggled' },
    classNames: { control: 'text' },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  const toggle = createToggle({ ...args });
  container.appendChild(toggle);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Use setting',
  isEnabled: false,
  classNames: '',
};
