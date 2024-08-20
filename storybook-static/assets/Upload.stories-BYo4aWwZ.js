const E=({label:s="Upload File",acceptedFormats:i="image/jpeg,image/jpg,application/pdf",placeholder:d="PDF or DOCX (max. 800x400px)",buttonText:b="Click to upload",disabled:f=!1,classNames:C="",styles:F={}}={})=>{const l=document.createElement("div");l.className=`${C}`,l.setAttribute("x-data",`{
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
  }`);const c=document.createElement("label");c.className="block text-sm font-medium leading-tight text-gray-900",c.textContent=s;const e=document.createElement("label");e.setAttribute("x-show","!fileStored"),e.className=`px-6 py-4 bg-white border rounded-lg mt-2 border-gray-200 flex flex-col gap-y-1 items-center justify-start ${f?"opacity-50 cursor-not-allowed":""}`,e.style=F,e.htmlFor="file_upload";const t=document.createElement("input");t.type="file",t.id="file_upload",t.name="file_upload",t.accept=i,t.className="hidden",t.disabled=f,t.setAttribute("x-on:change","uploadFile($event)");const a=document.createElement("svg");a.setAttribute("width","46"),a.setAttribute("height","46"),a.setAttribute("viewBox","0 0 46 46"),a.setAttribute("fill","none"),a.innerHTML=`
    <rect x="3" y="3" width="40" height="40" rx="20" fill="#FFF4EB"></rect>
    <rect x="3" y="3" width="40" height="40" rx="20" stroke="#FFF9F5" stroke-width="6"></rect>
    <path d="M26.3335 26.3332L23.0002 22.9999M23.0002 22.9999L19.6669 26.3332M23.0002 22.9999V30.4999M29.9919 28.3249C30.8047 27.8818 31.4467 27.1806 31.8168 26.3321C32.1868 25.4835 32.2637 24.5359 32.0354 23.6388C31.807 22.7417 31.2865 21.9462 30.5558 21.3778C29.8251 20.8094 28.9259 20.5005 28.0002 20.4999H26.9502C26.698 19.5243 26.2278 18.6185 25.5752 17.8507C24.9225 17.0829 24.1042 16.4731 23.182 16.0671C22.2597 15.661 21.2573 15.4694 20.2503 15.5065C19.2433 15.5436 18.2578 15.8085 17.3679 16.2813C16.4779 16.7541 15.7068 17.4225 15.1124 18.2362C14.518 19.05 14.1158 19.9879 13.936 20.9794C13.7563 21.9709 13.8036 22.9903 14.0746 23.961C14.3455 24.9316 14.8329 25.8281 15.5002 26.5832" stroke="#475467" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path>
  `;const p=document.createElement("span");p.className="font-semibold leading-tight text-itax-500 text-sm",p.textContent=b;const m=document.createElement("p");m.className="text-xs leading-none mt-1 text-center text-slate-600",m.textContent=d;const o=document.createElement("div");o.setAttribute("x-show","fileStored"),o.className="flex w-full border rounded-lg border-gray-200 mt-2 bg-gray-50 px-3 py-2 text-sm justify-between items-center gap-2";const u=document.createElement("p");u.setAttribute("x-text","fileName"),u.className="text-itax-500 font-medium";const r=document.createElement("button");return r.setAttribute("x-on:click","removeFile"),r.className="text-red-600 hover:underline font-medium text-sm w-fit",r.textContent="Delete",e.appendChild(a),e.appendChild(p),e.appendChild(m),e.appendChild(t),o.appendChild(u),o.appendChild(r),l.appendChild(c),l.appendChild(e),l.appendChild(o),l},N={title:"Forms/Upload",argTypes:{label:{control:"text",defaultValue:"Upload File"},acceptedFormats:{control:"text",defaultValue:"image/jpeg,image/jpg,application/pdf"},placeholder:{control:"text",defaultValue:"PDF or DOCX (max. 800x400px)"},buttonText:{control:"text",defaultValue:"Click to upload"},disabled:{control:"boolean",defaultValue:!1},classNames:{control:"text",defaultValue:""},styles:{control:"object",defaultValue:{}}}},y=s=>{const i=document.createElement("div"),d=E({...s});return i.appendChild(d),i},n=y.bind({});n.args={label:"Upload File",acceptedFormats:"image/jpeg,image/jpg,application/pdf",placeholder:"PDF or DOCX (max. 800x400px)",buttonText:"Click to upload",disabled:!1,classNames:"",styles:{}};var x,g,h;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const upload = createUpload({
    ...args
  });
  container.appendChild(upload);
  return container;
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const v=["Default"];export{n as Default,v as __namedExportsOrder,N as default};
