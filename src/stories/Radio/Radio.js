export const createRadio = ({
    label = 'Radio',
    disabled = false,
    name = 'radio-group',
    onChange = null,
    classNames = '',
    description = '',
    id = 'radio',
  }) => {
    const container = document.createElement('div');
    container.className = `relative flex items-start ${classNames}`;
  
    const radioWrapper = document.createElement('div');
    radioWrapper.className = 'flex h-6 items-center';
  
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.id = id;
    radioInput.name = name;
    radioInput.disabled = disabled;
    radioInput.className = 'h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-600';
  
    if (onChange) {
      radioInput.addEventListener('change', (event) => {
        onChange(event.target.checked);
      });
    }
  
    const labelWrapper = document.createElement('div');
    labelWrapper.className = 'ml-3 text-sm leading-6';
  
    const labelElement = document.createElement('label');
    labelElement.setAttribute('for', id);
    labelElement.className = 'text-gray-900 font-normal';
    labelElement.innerText = label;
  
    if (description) {
      const descriptionElement = document.createElement('p');
      descriptionElement.className = 'text-gray-500';
      descriptionElement.innerText = description;
      labelWrapper.appendChild(descriptionElement);
    }
  
    radioWrapper.appendChild(radioInput);
    labelWrapper.appendChild(labelElement);
    container.appendChild(radioWrapper);
    container.appendChild(labelWrapper);
  
    // Adding gap-2 between radio and label
    container.classList.add('gap-2');
  
    return container;
  };
  