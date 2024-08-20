// EmptyState.stories.js
import { createEmptyState } from './EmptyState';

export default {
  title: 'Data Display/Empty State',
  argTypes: {
    title: { control: 'text', defaultValue: 'No Record found' },
    description: { control: 'text', defaultValue: 'You do not have any Records' },
    buttonText: { control: 'text', defaultValue: 'Create Record' },
    canCreate: { control: 'boolean', defaultValue: true },
    buttonLink: { control: 'text', defaultValue: '#' },
    onButtonClick: { action: 'clicked' },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  const emptyState = createEmptyState({ ...args });
  container.appendChild(emptyState);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  title: 'No Record found',
  description: 'You do not have any Records',
  buttonText: 'Create Record',
  canCreate: true,
  buttonLink: '#',
};
