// Upload.js
export const createUpload = ({
  label = 'Upload File',
  acceptedFormats = 'image/jpeg,image/jpg,application/pdf',
  placeholder = 'PDF or DOCX (max. 800x400px)',
  buttonText = 'Click to upload',
  disabled = false,
  classNames = '',
  styles = {},
} = {}) => {
  const container = document.createElement('div');
  container.className = `${classNames}`;
  
  // Initialize Alpine.js component
  container.setAttribute('x-data', `{
    fileName: '',
    fileStored: false,
    uploadFile(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
        this.fileStored = true;
        sessionStorage.setItem('uploadedFile', file.name); // Storing file name in sessionStorage
      }
    },
    removeFile() {
      this.fileName = '';
      this.fileStored = false;
      sessionStorage.removeItem('uploadedFile');
    },
    init() {
      const storedFile = sessionStorage.getItem('uploadedFile');
      if (storedFile) {
        this.fileName = storedFile;
        this.fileStored = true;
      }
    }
  }`);

  // Label for the upload
  const labelElement = document.createElement('label');
  labelElement.className = 'block text-sm font-medium leading-tight text-gray-900';
  labelElement.textContent = label;

  // File upload area (shown when no file is uploaded)
  const uploadArea = document.createElement('label');
  uploadArea.setAttribute('x-show', '!fileStored');
  uploadArea.className = `px-6 py-4 bg-white border rounded-lg mt-2 border-gray-200 flex flex-col gap-y-1 items-center justify-start ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  uploadArea.style = styles;
  uploadArea.htmlFor = 'file_upload';

  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.id = 'file_upload';
  fileInput.name = 'file_upload';
  fileInput.accept = acceptedFormats;
  fileInput.className = 'hidden';
  fileInput.disabled = disabled;
  fileInput.setAttribute('x-on:change', 'uploadFile($event)');

  const icon = document.createElement('svg');
  icon.setAttribute('width', '46');
  icon.setAttribute('height', '46');
  icon.setAttribute('viewBox', '0 0 46 46');
  icon.setAttribute('fill', 'none');
  icon.innerHTML = `
    <rect x="3" y="3" width="40" height="40" rx="20" fill="#FFF4EB"></rect>
    <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FFF9F5" stroke-width="6"></rect>
    <path d="M26.3335 26.3332L23.0002 22.9999M23.0002 22.9999L19.6669 26.3332M23.0002 22.9999V30.4999M29.9919 28.3249C30.8047 27.8818 31.4467 27.1806 31.8168 26.3321C32.1868 25.4835 32.2637 24.5359 32.0354 23.6388C31.807 22.7417 31.2865 21.9462 30.5558 21.3778C29.8251 20.8094 28.9259 20.5005 28.0002 20.4999H26.9502C26.698 19.5243 26.2278 18.6185 25.5752 17.8507C24.9225 17.0829 24.1042 16.4731 23.182 16.0671C22.2597 15.661 21.2573 15.4694 20.2503 15.5065C19.2433 15.5436 18.2578 15.8085 17.3679 16.2813C16.4779 16.7541 15.7068 17.4225 15.1124 18.2362C14.518 19.05 14.1158 19.9879 13.936 20.9794C13.7563 21.9709 13.8036 22.9903 14.0746 23.961C14.3455 24.9316 14.8329 25.8281 15.5002 26.5832" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
  `;

  const buttonTextElement = document.createElement('span');
  buttonTextElement.className = 'font-semibold leading-tight text-itax-500 text-sm';
  buttonTextElement.textContent = buttonText;

  const placeholderElement = document.createElement('p');
  placeholderElement.className = 'text-xs leading-none mt-1 text-center text-slate-600';
  placeholderElement.textContent = placeholder;

  // Uploaded file display (shown when a file is uploaded)
  const uploadedFileArea = document.createElement('div');
  uploadedFileArea.setAttribute('x-show', 'fileStored');
  uploadedFileArea.className = 'flex w-full border rounded-lg border-gray-200 mt-2 bg-gray-50 px-3 py-2 text-sm justify-between items-center gap-2';

  const fileNameElement = document.createElement('p');
  fileNameElement.setAttribute('x-text', 'fileName');
  fileNameElement.className = 'text-itax-500 font-medium';

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('x-on:click', 'removeFile');
  deleteButton.className = 'text-red-600 hover:underline font-medium text-sm w-fit';
  deleteButton.textContent = 'Delete';

  // Append elements to the upload area
  uploadArea.appendChild(icon);
  uploadArea.appendChild(buttonTextElement);
  uploadArea.appendChild(placeholderElement);
  uploadArea.appendChild(fileInput);

  // Append elements to the uploaded file area
  uploadedFileArea.appendChild(fileNameElement);
  uploadedFileArea.appendChild(deleteButton);

  // Append all elements to the container
  container.appendChild(labelElement);
  container.appendChild(uploadArea);
  container.appendChild(uploadedFileArea);

  return container;
};
