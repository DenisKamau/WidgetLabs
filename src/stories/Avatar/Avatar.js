// Avatar.js
export const createAvatar = ({
    src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    size = 'default', // Can be a string like 'small', 'default', 'large', or a number for custom size
    shape = 'circle', // Can be 'circle' or 'square'
    classNames = '',
    styles = {},
  } = {}) => {
    const img = document.createElement('img');
  
    img.src = src;
  
    // Determine size class
    let sizeClass = '';
    if (typeof size === 'string') {
      switch (size) {
        case 'small':
          sizeClass = 'h-6 w-6';
          break;
        case 'default':
          sizeClass = 'h-10 w-10';
          break;
        case 'large':
          sizeClass = 'h-12 w-12';
          break;
        default:
          sizeClass = 'h-10 w-10'; // Default size
      }
    } else if (typeof size === 'number') {
      sizeClass = `h-${size} w-${size}`;
    }
  
    // Determine shape class
    const shapeClass = shape === 'square' ? 'rounded-lg' : 'rounded-full';
  
    img.className = `inline-block ${sizeClass} ${shapeClass} ${classNames}`;
    Object.assign(img.style, styles);
  
    return img;
  };
  