import { createCheckbox } from './Checkbox';

export default {
  title: 'Forms/Checkbox',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/abc123/Checkbox-Design?t=1234567890',
    },
  },
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    classNames: { control: 'text' },
    description: { control: 'text' },
    id: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

// Story 1: Basic Checkbox
const BasicTemplate = (args) => {
  return createCheckbox({ ...args });
};

export const BasicCheckbox = BasicTemplate.bind({});
BasicCheckbox.args = {
  label: 'Basic Checkbox',
  disabled: false,
  indeterminate: false,
  classNames: '',
  description: '',
  id: 'basic-checkbox',
};

// Story 2: Indeterminate Checkbox with Child Checkboxes using Alpine.js
const IndeterminateTemplate = () => {
  const container = document.createElement('div');
  container.setAttribute('x-data', `
    {
      selectAll: false,
      childCheckboxes: [false, false, false],
      toggleAll() {
        const toggleState = this.selectAll;
        this.childCheckboxes = this.childCheckboxes.map(() => toggleState);
      },
      updateSelectAll() {
        const total = this.childCheckboxes.length;
        const checkedCount = this.childCheckboxes.filter(checked => checked).length;
        if (checkedCount === 0) {
          this.selectAll = false;
          this.$refs.parentCheckbox.indeterminate = false;
        } else if (checkedCount === total) {
          this.selectAll = true;
          this.$refs.parentCheckbox.indeterminate = false;
        } else {
          this.selectAll = false;
          this.$refs.parentCheckbox.indeterminate = true;
        }
      }
    }
  `);
  container.className = 'space-y-2';

  // Parent checkbox
  const parentCheckbox = document.createElement('div');
  parentCheckbox.innerHTML = `
    <div class="relative flex items-start">
      <div class="flex h-6 items-center">
        <input type="checkbox" x-model="selectAll" x-on:change="toggleAll" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" x-ref="parentCheckbox">
      </div>
      <div class="ml-3 text-sm leading-6">
        <label class="text-gray-900 font-normal">Select All</label>
      </div>
    </div>
  `;

  // Child checkboxes
  const childCheckboxes = ['Option 1', 'Option 2', 'Option 3'].map((label, index) => {
    const childCheckbox = document.createElement('div');
    childCheckbox.innerHTML = `
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input type="checkbox" x-model="childCheckboxes[${index}]" x-on:change="updateSelectAll" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
        </div>
        <div class="ml-3 text-sm leading-6">
          <label class="text-gray-900 font-normal">${label}</label>
        </div>
      </div>
    `;
    return childCheckbox;
  });

  // Append elements to container
  container.appendChild(parentCheckbox);
  childCheckboxes.forEach(child => container.appendChild(child));

  return container.outerHTML;
};

export const IndeterminateCheckbox = IndeterminateTemplate.bind({});
