export const createButton = ({
  label = 'Button',
  variant = 'primary',
  size = 'medium',
  // backgroundColor = '',
  // hoverBackgroundColor = '',
  // textColor = '',
  // hoverTextColor = '',
  borderRadius = 'rounded-md',
  border = 'border',
  disabled = false,
  loading = false,
  icon = null,
  onClick = null,
  classNames = '',
  styles = {}, // Inline styles prop
  type = 'button', // can be 'button' or 'link'
  href = '#',
}) => {
  const baseClasses = 'inline-block text-sm font-semibold capitalize flex gap-x-2 items-center justify-center whitespace-nowrap';

  const sizeClass = size === 'small' ? 'py-2 px-4 text-xs' : size === 'large' ? 'py-3 px-6 text-lg' : 'py-2 px-4';

  const variantClass = {
    primary: 'primary-btn',
    secondary: 'secondary-btn',
    outlined: 'outlined-btn',
    error: 'error-btn',
    link: 'link',
    ghost: 'ghost-btn',
  }[variant] || 'primary-btn';

  // Commenting out the Tailwind-compatible class application for colors
  // const bgClass = backgroundColor ? `bg-[${backgroundColor}]` : '';
  // const hoverBgClass = hoverBackgroundColor ? `hover:bg-[${hoverBackgroundColor}]` : '';
  // const textClass = textColor ? `text-[${textColor}]` : '';
  // const hoverTextClass = hoverTextColor ? `hover:text-[${hoverTextColor}]` : '';

  const buttonClasses = [
    baseClasses,
    sizeClass,
    variantClass,
    // bgClass,
    // hoverBgClass,
    // textClass,
    // hoverTextClass,
    borderRadius,
    border,
    disabled ? 'disabled-btn' : '',
    classNames,
    'transition', 'duration-200', 'ease-in-out',
  ].filter(Boolean).join(' ');

  const buttonElement = document.createElement(type === 'link' ? 'a' : 'button');
  buttonElement.className = buttonClasses;
  buttonElement.innerText = label;

  // Apply inline styles
  Object.assign(buttonElement.style, styles);

  if (icon) {
    const iconElement = document.createElement('i');
    iconElement.className = icon;
    buttonElement.prepend(iconElement);
  }

  if (disabled) {
    buttonElement.disabled = true;
  }

  if (type === 'link') {
    buttonElement.href = href;
    buttonElement.setAttribute('role', 'button');
  }

  if (loading) {
    const loader = document.createElement('span');
    loader.className = 'loader'; // Define loader class as needed
    buttonElement.appendChild(loader);
  }

  if (onClick && !disabled) {
    buttonElement.addEventListener('click', onClick);
  }

  return buttonElement;
};
