import { createRadio } from './Radio';

export default {
  title: 'Forms/Radio',
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/abc123/Radio-Design?t=1234567890',
    },
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    name: { control: 'text' },
    classNames: { control: 'text' },
    description: { control: 'text' },
    id: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  container.className = 'space-y-2';

  // Example: Multiple radio options
  const radio1 = createRadio({ ...args, label: 'Option 1', id: 'option-1' });
  const radio2 = createRadio({ ...args, label: 'Option 2', id: 'option-2' });
  const radio3 = createRadio({ ...args, label: 'Option 3', id: 'option-3' });

  container.appendChild(radio1);
  container.appendChild(radio2);
  container.appendChild(radio3);

  return container.outerHTML;
};

// Story for Multiple Radio Choices
export const MultipleChoices = Template.bind({});
MultipleChoices.args = {
  disabled: false,
  name: 'radio-group',
  classNames: '',
  description: '',
};
