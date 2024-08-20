export const createPagination = ({
  currentPage = 1,
  totalPages = 1,
  totalEntries = 0,
  pageSize = 10,
  onPageChange = null,
  showEllipsis = false,
  showRowsPerPage = true, // New prop to control Rows per page display
  showShowingCounter = true, // New prop to control the Showing counter display
}) => {
  const calcStartOfCurrent = () => {
    return currentPage * pageSize - (pageSize - 1);
  };

  const calcEndOfCurrent = () => {
    const currentTotal = currentPage * pageSize;
    return currentTotal <= totalEntries ? currentTotal : totalEntries;
  };

  const nav = document.createElement('nav');
  nav.className = 'w-full flex flex-col sm:flex-row py-3 justify-between border-t border-gray-200 px-4 items-center';

  if (showRowsPerPage) {
    const rowsPerPageDiv = document.createElement('div');
    rowsPerPageDiv.className = 'flex items-center gap-1';

    const rowsPerPageText = document.createElement('p');
    rowsPerPageText.className = 'text-sm font-medium text-gray-500';
    rowsPerPageText.innerText = 'Rows per page:';

    const rowsSelect = document.createElement('select');
    rowsSelect.name = 'rows';
    rowsSelect.className = 'block w-18 py-2 pl-3 pr-3 text-sm min-w-[70px] !border-0 !border-transparent focus:!border-transparent focus:outline-none focus:!ring-0 sm:text-sm';
    [5, 10, 20, 30, 40].forEach(value => {
      const option = document.createElement('option');
      option.value = value;
      option.text = value;
      if (value === pageSize) option.selected = true;
      rowsSelect.appendChild(option);
    });
    rowsSelect.addEventListener('change', (e) => {
      if (onPageChange) onPageChange(1, Number(e.target.value));
    });

    rowsPerPageDiv.appendChild(rowsPerPageText);
    rowsPerPageDiv.appendChild(rowsSelect);
    nav.appendChild(rowsPerPageDiv);
  }

  if (showShowingCounter) {
    const showingCounter = document.createElement('div');
    showingCounter.className = 'mx-6 mt-6 sm:mt-0';
    showingCounter.innerHTML = `<p class="text-sm text-gray-700">Showing <span class="font-medium">${calcStartOfCurrent()}</span> to <span class="font-medium">${calcEndOfCurrent()}</span> of <span class="font-medium">${totalEntries}</span></p>`;
    nav.appendChild(showingCounter);
  }

  const paginationControls = document.createElement('div');
  paginationControls.className = `sm:mt-1 mt-4 flex items-center space-x-2 ${showEllipsis ? 'justify-between flex-1' : ''}`;

  const createButton = (title, label, onClick, isDisabled) => {
    const button = document.createElement('button');
    button.title = title;
    button.disabled = isDisabled;
    button.className = `outlined-btn ${isDisabled ? 'text-gray-300 cursor-not-allowed' : ''}`;
    button.innerText = label;
    if (!isDisabled) button.addEventListener('click', onClick);
    return button;
  };

  const previousButton = createButton(
    'Go to Previous page',
    'Previous',
    () => onPageChange(currentPage - 1, pageSize),
    currentPage <= 1
  );

  const pageLinks = document.createElement('div');
  pageLinks.className = 'flex space-x-2';

  const createPageLink = (pageNumber) => {
    const pageLink = createButton(
      `Go to page ${pageNumber}`,
      `${pageNumber}`,
      () => onPageChange(pageNumber, pageSize),
      false
    );
    if (pageNumber === currentPage) {
      pageLink.className += ' border-indigo-500 text-indigo-600';
    }
    return pageLink;
  };

  if (showEllipsis) {
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageLinks.appendChild(createPageLink(i));
      }
    } else {
      pageLinks.appendChild(createPageLink(1));

      if (currentPage > 4) {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'inline-flex items-center px-4 text-sm font-medium text-gray-500';
        ellipsis.innerText = '...';
        pageLinks.appendChild(ellipsis);
      }

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pageLinks.appendChild(createPageLink(i));
      }

      if (currentPage < totalPages - 3) {
        const ellipsis = document.createElement('span');
        ellipsis.className = 'inline-flex items-center px-4 text-sm font-medium text-gray-500';
        ellipsis.innerText = '...';
        pageLinks.appendChild(ellipsis);
      }

      pageLinks.appendChild(createPageLink(totalPages));
    }
  } else {
    const currentPageDisplay = document.createElement('div');
    currentPageDisplay.className = 'w-10 text-center truncate text-sm text-gray-600';
    currentPageDisplay.innerText = currentPage;
    pageLinks.appendChild(currentPageDisplay);
  }

  const nextButton = createButton(
    'Go to Next page',
    'Next',
    () => onPageChange(currentPage + 1, pageSize),
    currentPage >= totalPages
  );

  paginationControls.appendChild(previousButton);
  paginationControls.appendChild(pageLinks);
  paginationControls.appendChild(nextButton);

  nav.appendChild(paginationControls);

  return nav;
};
