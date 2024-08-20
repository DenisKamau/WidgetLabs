// Input.js
export const createInput = ({
    id = 'email',
    name = 'email',
    label = 'Email',
    type = 'email',
    placeholder = 'you@example.com',
    disabled = false,
    min = null,
    max = null,
    readonly = false,
    classNames = '',
    styles = {},
    required = false,
  } = {}) => {
    const container = document.createElement('div');
    container.className = `${classNames}`;
  
    // Create the label element
    const labelElement = document.createElement('label');
    labelElement.className = 'block text-sm font-medium leading-6 text-gray-900';
    labelElement.setAttribute('for', id);
    labelElement.textContent = label;
  
    // Create the input wrapper
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'mt-2';
  
    // Create the input element
    const inputElement = document.createElement('input');
    inputElement.type = type;
    inputElement.name = name;
    inputElement.id = id;
    inputElement.className =
      'px-2';
    inputElement.placeholder = placeholder;
    inputElement.disabled = disabled;
    if (min) inputElement.min = min;
    if (max) inputElement.max = max;
    inputElement.readOnly = readonly;
    if (required) inputElement.setAttribute('required', true);
  
    // Apply inline styles if provided
    Object.assign(inputElement.style, styles);
  
    // Append input to wrapper and wrapper to container
    inputWrapper.appendChild(inputElement);
    container.appendChild(labelElement);
    container.appendChild(inputWrapper);
  
    return container;
  };
  