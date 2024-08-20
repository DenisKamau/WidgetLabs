// Toggle.js
export const createToggle = ({
    label = 'Use setting',
    isEnabled = false,
    onToggle = null,
    classNames = '',
  } = {}) => {
    const toggleContainer = document.createElement('div');
    toggleContainer.className = 'flex items-center space-x-3';
  
    const toggleButton = document.createElement('button');
    toggleButton.setAttribute('type', 'button');
    toggleButton.setAttribute('role', 'switch');
    toggleButton.setAttribute('aria-checked', isEnabled.toString());
    toggleButton.className = [
      'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
      isEnabled ? 'bg-indigo-600' : 'bg-gray-200',
      classNames,
    ].join(' ');
  
    const toggleSpan = document.createElement('span');
    toggleSpan.className = [
      'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
      isEnabled ? 'translate-x-5' : 'translate-x-0',
    ].join(' ');
    toggleSpan.setAttribute('aria-hidden', 'true');
  
    toggleButton.appendChild(toggleSpan);
  
    toggleButton.addEventListener('click', function () {
      isEnabled = !isEnabled;
      toggleButton.setAttribute('aria-checked', isEnabled.toString());
      toggleButton.className = [
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
        isEnabled ? 'bg-indigo-600' : 'bg-gray-200',
        classNames,
      ].join(' ');
      toggleSpan.className = [
        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        isEnabled ? 'translate-x-5' : 'translate-x-0',
      ].join(' ');
  
      if (typeof onToggle === 'function') {
        onToggle(isEnabled);
      }
    });
  
    const toggleLabel = document.createElement('span');
    toggleLabel.textContent = label;
    toggleLabel.className = 'text-sm font-medium text-gray-900';
  
    toggleContainer.appendChild(toggleButton);
    toggleContainer.appendChild(toggleLabel);
  
    return toggleContainer;
  };
  