// Select.js
export const createSelect = ({
    id = 'location',
    name = 'location',
    label = 'Location',
    options = ['United States', 'Canada', 'Mexico'],
    selectedOption = 'Canada',
    classNames = '',
  } = {}) => {
    const container = document.createElement('div');
    container.className = `${classNames}`;
  
    // Create the label element
    const labelElement = document.createElement('label');
    labelElement.className = 'block text-sm font-medium leading-6 text-gray-900';
    labelElement.setAttribute('for', id);
    labelElement.textContent = label;
  
    // Create the select element
    const selectElement = document.createElement('select');
    selectElement.id = id;
    selectElement.name = name;
    selectElement.className =
      'mt-2 bg-white px-2';
  
    options.forEach((option) => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      if (option === selectedOption) {
        optionElement.selected = true;
      }
      selectElement.appendChild(optionElement);
    });
  
    // Append label and select to the container
    container.appendChild(labelElement);
    container.appendChild(selectElement);
  
    return container;
  };
  