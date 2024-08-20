// Badge.js
export const createBadge = ({
    text = 'Badge',
    color = 'bg-gray-100 text-gray-600',
    size = 'default', // Can be 'small', 'default', or 'large'
    type = 'default', // Can be 'primary', 'success', 'danger', etc.
    removable = false,
    onRemove = null,
    classNames = '',
    styles = {},
  } = {}) => {
    const span = document.createElement('span');
  
    // Determine size class
    let sizeClass = '';
    switch (size) {
      case 'small':
        sizeClass = 'px-2.5 py-0.5 text-xs';
        break;
      case 'large':
        sizeClass = 'px-3 py-1 text-sm';
        break;
      default:
        sizeClass = 'px-2 py-1 text-xs'; // Default size
    }
  
    // Determine type (color) class
    const typeClass = {
      primary: 'bg-blue-100 text-blue-800',
      success: 'bg-green-100 text-green-800',
      danger: 'bg-red-100 text-red-800',
      warning: 'bg-yellow-100 text-yellow-800',
      gray: 'bg-gray-100 text-gray-600',
    }[type] || 'bg-gray-100 text-gray-600';
  
    span.className = `inline-flex items-center gap-x-0.5 rounded-md ${typeClass} ${sizeClass} ${classNames}`;
    span.textContent = text;
    Object.assign(span.style, styles);
  
    // If removable, add a remove button
    if (removable) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20';
      button.innerHTML = `
        <span class="sr-only">Remove</span>
        <svg viewBox="0 0 14 14" class="h-3.5 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75">
          <path d="M4 4l6 6m0-6l-6 6" />
        </svg>
        <span class="absolute -inset-1"></span>
      `;
  
      button.addEventListener('click', () => {
        if (onRemove) {
          onRemove();
        }
        span.remove();
      });
  
      span.appendChild(button);
    }
  
    return span;
  };
  