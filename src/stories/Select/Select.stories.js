// Select.stories.js
import { createSelect } from './Select';

export default {
  title: 'Forms/Select',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text', defaultValue: 'Location' },
    options: { control: 'array', defaultValue: ['United States', 'Canada', 'Mexico'] },
    selectedOption: { control: 'text', defaultValue: 'Canada' },
    classNames: { control: 'text' },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  const select = createSelect({ ...args });
  container.appendChild(select);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Location',
  options: ['United States', 'Canada', 'Mexico'],
  selectedOption: 'Canada',
  classNames: 'min-w-[250px]',
};
