const I=({items:c=[],placeholder:d="Search...",disabled:n=!1,onInputChange:w=null,onSelect:A=null,classNames:f="",label:y="Assigned to"})=>{const o=document.createElement("div");o.className=`${f}`;const a=document.createElement("label");a.className="block text-sm font-medium leading-6 text-gray-900",a.setAttribute("for","combobox"),a.textContent=y;const i=document.createElement("div");i.className="relative flex items-center justify-between mt-2";const e=document.createElement("input");e.type="text",e.className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",e.placeholder=d,e.disabled=n,e.setAttribute("role","combobox"),e.setAttribute("aria-controls","options"),e.setAttribute("aria-expanded","false");const s=document.createElement("button");s.type="button",s.className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none",s.innerHTML=`
      <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clip-rule="evenodd" />
      </svg>
    `;const t=document.createElement("ul");return t.className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",t.id="options",t.setAttribute("role","listbox"),t.style.display="none",i.appendChild(e),i.appendChild(s),o.appendChild(a),o.appendChild(i),o.appendChild(t),o.setAttribute("x-data",`{
      query: '',
      open: false,
      filteredItems: [],
      items: ${JSON.stringify(c)},
      init() {
        this.filteredItems = this.items;
      },
      filterItems() {
        this.filteredItems = this.items.filter(item => item.toLowerCase().includes(this.query.toLowerCase()));
        this.open = this.filteredItems.length > 0;
        dropdownList.style.display = this.open ? 'block' : 'none';
      },
      selectItem(item) {
        this.query = item;
        this.open = false;
        dropdownList.style.display = 'none';
        if (onSelect) onSelect(item);
      },
      toggleDropdown() {
        this.open = !this.open;
        dropdownList.style.display = this.open ? 'block' : 'none';
      }
    }`),e.setAttribute("x-model","query"),e.setAttribute("x-on:input","filterItems()"),e.setAttribute("x-on:focus","filterItems()"),s.setAttribute("x-on:click","toggleDropdown()"),t.setAttribute("x-show","open"),t.innerHTML=`
      <template x-for="(item, index) in filteredItems" :key="index">
        <li 
          class="relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900"
          :class="{ 'text-white bg-indigo-600': false }"
          x-text="item"
          x-on:click="selectItem(item)"
          role="option"
          tabindex="-1"
        ></li>
      </template>
    `,o},L={title:"Forms/Autocomplete",parameters:{layout:"centered"},argTypes:{items:{control:"object"},placeholder:{control:"text"},disabled:{control:"boolean"},classNames:{control:"text"},label:{control:"text"}}},x=c=>I({...c,onInputChange:n=>{console.log("Input changed to:",n)},onSelect:n=>{console.log("Item selected:",n)}}).outerHTML,l=x.bind({});l.args={items:["Leslie Alexander","John Doe","Jane Smith","Emily Johnson","Michael Brown"],placeholder:"Search...",disabled:!1,classNames:"",label:"Assigned to"};const r=x.bind({});r.args={items:["Leslie Alexander","John Doe","Jane Smith","Emily Johnson","Michael Brown"],placeholder:"Search...",disabled:!0,classNames:"",label:"Assigned to"};var m,u,p;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const autocomplete = createAutocomplete({
    ...args,
    onInputChange: query => {
      console.log('Input changed to:', query);
    },
    onSelect: selectedItem => {
      console.log('Item selected:', selectedItem);
    }
  });
  return autocomplete.outerHTML;
}`,...(p=(u=l.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,h,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const autocomplete = createAutocomplete({
    ...args,
    onInputChange: query => {
      console.log('Input changed to:', query);
    },
    onSelect: selectedItem => {
      console.log('Item selected:', selectedItem);
    }
  });
  return autocomplete.outerHTML;
}`,...(b=(h=r.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const S=["Default","Disabled"];export{l as Default,r as Disabled,S as __namedExportsOrder,L as default};
