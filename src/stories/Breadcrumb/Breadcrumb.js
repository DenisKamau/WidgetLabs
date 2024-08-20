export const createBreadcrumb = ({
    items = [],
    separator = 'chevron', // Default to chevron icon
  }) => {
    const wrapper = document.createElement('nav');
    wrapper.className = 'flex my-4';
  
    const ol = document.createElement('ol');
    ol.className = 'hidden sm:flex items-center space-x-2 capitalize';
    ol.setAttribute('role', 'list');
  
    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'flex gap-2'; // Adding the required classes
  
      if (index < items.length - 1) {
        const anchor = document.createElement('a');
        anchor.href = item.href;
        anchor.className = 'text-slate-600 hover:text-gray-800 text-sm font-medium leading-6';
        anchor.innerText = item.label;
  
        li.appendChild(anchor);
  
        const separatorSpan = document.createElement('div');
        separatorSpan.className = 'flex items-center';
  
        if (separator === 'chevron') {
          const svg = document.createElement('svg');
          svg.className = 'h-5 w-5 flex-shrink-0 text-gray-400';
          svg.setAttribute('viewBox', '0 0 20 20');
          svg.setAttribute('fill', 'currentColor');
          svg.setAttribute('aria-hidden', 'true');
  
          svg.innerHTML = `
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
          `;
  
          separatorSpan.appendChild(svg);
        } else if (separator === '/') {
          separatorSpan.innerText = '/';
          separatorSpan.className += ' ml-1 text-gray-400';
        }
  
        li.appendChild(separatorSpan);
      } else {
        const span = document.createElement('span');
        span.className = 'text-slate-700 text-sm font-semibold bg-gray-50 rounded-md px-1.5 py-0.5';
        span.innerText = item.label;
        li.appendChild(span);
      }
  
      ol.appendChild(li);
    });
  
    wrapper.appendChild(ol);
  
    return wrapper;
  };
  