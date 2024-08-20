const v=({label:e="Checkbox",disabled:i=!1,indeterminate:h=!1,onChange:n=null,classNames:x="",description:c="",id:b="checkbox"})=>{const l=document.createElement("div");l.className=`relative flex items-start ${x}`;const m=document.createElement("div");m.className="flex h-6 items-center";const t=document.createElement("input");t.type="checkbox",t.id=b,t.disabled=i,t.className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",h&&(t.indeterminate=!0),n&&t.addEventListener("change",s=>{n(s.target.checked)});const o=document.createElement("div");o.className="ml-3 text-sm leading-6";const r=document.createElement("label");if(r.setAttribute("for",b),r.className="text-gray-900 font-normal",r.innerText=e,c){const s=document.createElement("p");s.className="text-gray-500",s.innerText=c,o.appendChild(s)}return m.appendChild(t),o.appendChild(r),l.appendChild(m),l.appendChild(o),l.classList.add("gap-2"),l},E={title:"Forms/Checkbox",parameters:{design:{type:"figma",url:"https://www.figma.com/file/abc123/Checkbox-Design?t=1234567890"}},argTypes:{label:{control:"text"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},classNames:{control:"text"},description:{control:"text"},id:{control:"text"},onChange:{action:"changed"}}},A=e=>v({...e}),a=A.bind({});a.args={label:"Basic Checkbox",disabled:!1,indeterminate:!1,classNames:"",description:"",id:"basic-checkbox"};const y=()=>{const e=document.createElement("div");e.setAttribute("x-data",`
    {
      selectAll: false,
      childCheckboxes: [false, false, false],
      toggleAll() {
        const toggleState = this.selectAll;
        this.childCheckboxes = this.childCheckboxes.map(() => toggleState);
      },
      updateSelectAll() {
        const total = this.childCheckboxes.length;
        const checkedCount = this.childCheckboxes.filter(checked => checked).length;
        if (checkedCount === 0) {
          this.selectAll = false;
          this.$refs.parentCheckbox.indeterminate = false;
        } else if (checkedCount === total) {
          this.selectAll = true;
          this.$refs.parentCheckbox.indeterminate = false;
        } else {
          this.selectAll = false;
          this.$refs.parentCheckbox.indeterminate = true;
        }
      }
    }
  `),e.className="space-y-2";const i=document.createElement("div");i.innerHTML=`
    <div class="relative flex items-start">
      <div class="flex h-6 items-center">
        <input type="checkbox" x-model="selectAll" x-on:change="toggleAll" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" x-ref="parentCheckbox">
      </div>
      <div class="ml-3 text-sm leading-6">
        <label class="text-gray-900 font-normal">Select All</label>
      </div>
    </div>
  `;const h=["Option 1","Option 2","Option 3"].map((n,x)=>{const c=document.createElement("div");return c.innerHTML=`
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input type="checkbox" x-model="childCheckboxes[${x}]" x-on:change="updateSelectAll" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
        </div>
        <div class="ml-3 text-sm leading-6">
          <label class="text-gray-900 font-normal">${n}</label>
        </div>
      </div>
    `,c});return e.appendChild(i),h.forEach(n=>e.appendChild(n)),e.outerHTML},d=y.bind({});var p,g,f;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  return createCheckbox({
    ...args
  });
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var k,u,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const container = document.createElement('div');
  container.setAttribute('x-data', \`
    {
      selectAll: false,
      childCheckboxes: [false, false, false],
      toggleAll() {
        const toggleState = this.selectAll;
        this.childCheckboxes = this.childCheckboxes.map(() => toggleState);
      },
      updateSelectAll() {
        const total = this.childCheckboxes.length;
        const checkedCount = this.childCheckboxes.filter(checked => checked).length;
        if (checkedCount === 0) {
          this.selectAll = false;
          this.$refs.parentCheckbox.indeterminate = false;
        } else if (checkedCount === total) {
          this.selectAll = true;
          this.$refs.parentCheckbox.indeterminate = false;
        } else {
          this.selectAll = false;
          this.$refs.parentCheckbox.indeterminate = true;
        }
      }
    }
  \`);
  container.className = 'space-y-2';

  // Parent checkbox
  const parentCheckbox = document.createElement('div');
  parentCheckbox.innerHTML = \`
    <div class="relative flex items-start">
      <div class="flex h-6 items-center">
        <input type="checkbox" x-model="selectAll" x-on:change="toggleAll" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" x-ref="parentCheckbox">
      </div>
      <div class="ml-3 text-sm leading-6">
        <label class="text-gray-900 font-normal">Select All</label>
      </div>
    </div>
  \`;

  // Child checkboxes
  const childCheckboxes = ['Option 1', 'Option 2', 'Option 3'].map((label, index) => {
    const childCheckbox = document.createElement('div');
    childCheckbox.innerHTML = \`
      <div class="relative flex items-start">
        <div class="flex h-6 items-center">
          <input type="checkbox" x-model="childCheckboxes[\${index}]" x-on:change="updateSelectAll" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
        </div>
        <div class="ml-3 text-sm leading-6">
          <label class="text-gray-900 font-normal">\${label}</label>
        </div>
      </div>
    \`;
    return childCheckbox;
  });

  // Append elements to container
  container.appendChild(parentCheckbox);
  childCheckboxes.forEach(child => container.appendChild(child));
  return container.outerHTML;
}`,...(C=(u=d.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const S=["BasicCheckbox","IndeterminateCheckbox"];export{a as BasicCheckbox,d as IndeterminateCheckbox,S as __namedExportsOrder,E as default};
