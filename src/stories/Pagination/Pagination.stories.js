import { createPagination } from './Pagination';

export default {
  title: 'Navigation/Pagination',
  argTypes: {
    currentPage: { control: 'number', defaultValue: 1 },
    totalPages: { control: 'number', defaultValue: 10 },
    totalEntries: { control: 'number', defaultValue: 100 },
    pageSize: { control: 'number', defaultValue: 10 },
    showEllipsis: { control: 'boolean', defaultValue: false },
    onPageChange: { action: 'pageChanged' },
  },
};

const Template = (args) => {
  const pagination = createPagination({ ...args });
  
  const container = document.createElement('div');
  container.className = 'mb-8';
  container.appendChild(pagination);

  return container.outerHTML; 
};

export const RowsPerPage = Template.bind({});
RowsPerPage.args = {
  currentPage: 1,
  totalPages: 10,
  totalEntries: 100,
  pageSize: 10,
  showEllipsis: false,
  showRowsPerPage: true, // Show Rows Per Page
  showShowingCounter: true, // Show Showing Counter
};

export const WithEllipse = Template.bind({});
WithEllipse.args = {
  currentPage: 5,
  totalPages: 10,
  totalEntries: 100,
  pageSize: 10,
  showEllipsis: true,
  showRowsPerPage: false, // Hide Rows Per Page
  showShowingCounter: false, // Hide Showing Counter
};
