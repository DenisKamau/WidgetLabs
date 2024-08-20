export const createCheckbox = ({
  label = 'Checkbox',
  disabled = false,
  indeterminate = false,
  onChange = null,
  classNames = '',
  description = '',
  id = 'checkbox',
}) => {
  const container = document.createElement('div');
  container.className = `relative flex items-start ${classNames}`;

  const checkboxWrapper = document.createElement('div');
  checkboxWrapper.className = 'flex h-6 items-center';

  const checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.id = id;
  checkboxInput.disabled = disabled;
  checkboxInput.className = 'h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600';

  if (indeterminate) {
    checkboxInput.indeterminate = true;
  }

  if (onChange) {
    checkboxInput.addEventListener('change', (event) => {
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

  checkboxWrapper.appendChild(checkboxInput);
  labelWrapper.appendChild(labelElement);
  container.appendChild(checkboxWrapper);
  container.appendChild(labelWrapper);

  // Adding gap-2 between checkbox and label
  container.classList.add('gap-2');

  return container;
};
