import { createAutocomplete } from './Autocomplete';

export default {
  title: 'Forms/Autocomplete',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    items: { control: 'object' },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    classNames: { control: 'text' },
    label: { control: 'text' },
  },
};

const Template = (args) => {
  const autocomplete = createAutocomplete({
    ...args,
    onInputChange: (query) => {
      console.log('Input changed to:', query);
    },
    onSelect: (selectedItem) => {
      console.log('Item selected:', selectedItem);
    },
  });
  return autocomplete.outerHTML;
};

export const Default = Template.bind({});
Default.args = {
  items: ['Leslie Alexander', 'John Doe', 'Jane Smith', 'Emily Johnson', 'Michael Brown'],
  placeholder: 'Search...',
  disabled: false,
  classNames: '',
  label: 'Assigned to',
};

export const Disabled = Template.bind({});
Disabled.args = {
  items: ['Leslie Alexander', 'John Doe', 'Jane Smith', 'Emily Johnson', 'Michael Brown'],
  placeholder: 'Search...',
  disabled: true,
  classNames: '',
  label: 'Assigned to',
};
