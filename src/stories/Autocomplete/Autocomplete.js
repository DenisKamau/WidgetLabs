export const createAutocomplete = ({
    items = [],
    placeholder = 'Search...',
    disabled = false,
    onInputChange = null,
    onSelect = null,
    classNames = '',
    label = 'Assigned to',
  }) => {
    const container = document.createElement('div');
    container.className = `${classNames}`;
  
    // Create the label element
    const labelElement = document.createElement('label');
    labelElement.className = 'block text-sm font-medium leading-6 text-gray-900';
    labelElement.setAttribute('for', 'combobox');
    labelElement.textContent = label;
  
    // Wrapper for input and button
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'relative flex items-center justify-between mt-2';
  
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';
    input.placeholder = placeholder;
    input.disabled = disabled;
    input.setAttribute('role', 'combobox');
    input.setAttribute('aria-controls', 'options');
    input.setAttribute('aria-expanded', 'false');
  
    const dropdownButton = document.createElement('button');
    dropdownButton.type = 'button';
    dropdownButton.className = 'absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none';
    dropdownButton.innerHTML = `
      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
      </svg>
    `;
  
    const dropdownList = document.createElement('ul');
    dropdownList.className = 'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm';
    dropdownList.id = 'options';
    dropdownList.setAttribute('role', 'listbox');
    dropdownList.style.display = 'none';
  
    // Append input and button to the input wrapper
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(dropdownButton);
  
    // Append elements to the main container
    container.appendChild(labelElement);  // Add the label before the input
    container.appendChild(inputWrapper);
    container.appendChild(dropdownList);
  
    // Initialize Alpine.js for interactivity
    container.setAttribute('x-data', `{
      query: '',
      open: false,
      filteredItems: [],
      items: ${JSON.stringify(items)},
      init() {
        this.filteredItems = this.items;
      },
      filterItems() {
        this.filteredItems = this.items.filter(item => item.toLowerCase().includes(this.query.toLowerCase()));
        this.open = this.filteredItems.length > 0;
        dropdownList.style.display = this.open ? 'block' : 'none';
      },
      selectItem(item) {
        this.query = item;
        this.open = false;
        dropdownList.style.display = 'none';
        if (onSelect) onSelect(item);
      },
      toggleDropdown() {
        this.open = !this.open;
        dropdownList.style.display = this.open ? 'block' : 'none';
      }
    }`);
  
    input.setAttribute('x-model', 'query');
    input.setAttribute('x-on:input', 'filterItems()');
    input.setAttribute('x-on:focus', 'filterItems()');
    dropdownButton.setAttribute('x-on:click', 'toggleDropdown()');
  
    // Add items dynamically using Alpine.js
    dropdownList.setAttribute('x-show', 'open');
    dropdownList.innerHTML = `
      <template x-for="(item, index) in filteredItems" :key="index">
        <li 
          class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
          :class="{ 'text-white bg-indigo-600': false }"
          x-text="item"
          x-on:click="selectItem(item)"
          role="option"
          tabindex="-1"
        ></li>
      </template>
    `;
  
    return container;
  };
  