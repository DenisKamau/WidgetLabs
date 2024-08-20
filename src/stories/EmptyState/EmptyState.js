// EmptyState.js
export const createEmptyState = ({
    title = 'No Record found',
    description = 'You do not have any Invoices',
    buttonText = 'Create Invoice',
    canCreate = true,
    buttonLink = '#',
    onButtonClick = null,
  } = {}) => {
    const container = document.createElement('div');
    container.className = 'p-4 sm:p-8 flex items-center justify-center gap-2 flex-col';
  
    const iconContainer = document.createElement('div');
    iconContainer.className = 'w-[48px] h-[48px] rounded-full border-[8px] border-[#F9FAFB] bg-[#F2F4F7] text-[#475467]';
  
    const iconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    iconSvg.setAttribute('width', '24');
    iconSvg.setAttribute('height', '24');
    iconSvg.setAttribute('viewBox', '0 0 24 24');
    iconSvg.setAttribute('fill', 'none');
    iconSvg.innerHTML = `
      <path d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke="#475467" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  
    iconContainer.appendChild(iconSvg);
  
    const titleElement = document.createElement('h3');
    titleElement.className = 'text-[#101828] font-semibold';
    titleElement.textContent = title;
  
    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'text-sm text-[#475467] mb-4';
    descriptionElement.textContent = description;
  
    container.appendChild(iconContainer);
    container.appendChild(titleElement);
    container.appendChild(descriptionElement);
  
    if (canCreate) {
      const buttonLinkElement = document.createElement('a');
      buttonLinkElement.href = buttonLink;
      buttonLinkElement.className = 'secondary-btn flex items-center gap-2';
  
      if (onButtonClick) {
        buttonLinkElement.addEventListener('click', onButtonClick);
      }
  
      const buttonIconSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      buttonIconSvg.setAttribute('width', '20');
      buttonIconSvg.setAttribute('height', '20');
      buttonIconSvg.setAttribute('viewBox', '0 0 20 20');
      buttonIconSvg.setAttribute('fill', 'none');
      buttonIconSvg.innerHTML = `
        <path d="M10.0003 4.16602V15.8327M4.16699 9.99935H15.8337" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      `;
  
      const buttonTextElement = document.createElement('span');
      buttonTextElement.textContent = buttonText;
  
      buttonLinkElement.appendChild(buttonIconSvg);
      buttonLinkElement.appendChild(buttonTextElement);
      container.appendChild(buttonLinkElement);
    }
  
    return container;
  };
  