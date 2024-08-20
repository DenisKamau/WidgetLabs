// Upload.stories.js
import { createUpload } from './Upload';

export default {
  title: 'Forms/Upload',
  argTypes: {
    label: { control: 'text', defaultValue: 'Upload File' },
    acceptedFormats: { control: 'text', defaultValue: 'image/jpeg,image/jpg,application/pdf' },
    placeholder: { control: 'text', defaultValue: 'PDF or DOCX (max. 800x400px)' },
    buttonText: { control: 'text', defaultValue: 'Click to upload' },
    disabled: { control: 'boolean', defaultValue: false },
    classNames: { control: 'text', defaultValue: '' },
    styles: { control: 'object', defaultValue: {} },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  const upload = createUpload({ ...args });
  container.appendChild(upload);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  label: 'Upload File',
  acceptedFormats: 'image/jpeg,image/jpg,application/pdf',
  placeholder: 'PDF or DOCX (max. 800x400px)',
  buttonText: 'Click to upload',
  disabled: false,
  classNames: '',
  styles: {},
};
