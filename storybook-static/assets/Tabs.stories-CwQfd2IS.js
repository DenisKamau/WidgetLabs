const $=({selectedTab:o="My Account",tabs:n=["My Account","Company","Team Members","Billing"],onClick:i=null,direction:T="horizontal",href:y,title:f})=>{const s=document.createElement("div");s.setAttribute("x-data",`{ tab: '${o}' }`);const t=T==="vertical",c=document.createElement("div");c.className="sm:hidden",c.innerHTML=`
	  <label for="tabs" class="sr-only">Select a tab</label>
	  <select x-model="tab" id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
		${n.map(e=>`<option>${e}</option>`).join("")}
	  </select>
	`;const l=document.createElement("div");return l.className=`hidden sm:block ${t?"flex flex-col":"flex items-center space-x-6"}`,l.innerHTML=`
	  <div class="${t?"border-r border-gray-200":"border-b border-gray-200"}">
		<nav class="${t?"flex flex-col space-y-2":"flex items-center space-x-6"}" aria-label="Tabs">
		  ${n.map(e=>`
			  <a href="${y||"#"}"
				 :class="{
				   'border-blue-500 text-blue-600': tab === '${e}', 
				   '${t?"border-l-2":"border-b-2"} ${t?"pl-2":"py-2"} ${t?"border-l-blue-500":"border-b-blue-500"} text-blue-600': tab === '${e}',
				   'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': tab !== '${e}'
				 }" 
				 @click.prevent="tab = '${e}'; ${i?i(e):""}" 
				 class="whitespace-nowrap px-1 text-sm font-medium">
				${f||e}
			  </a>`).join("")}
		</nav>
	  </div>
	`,s.appendChild(c),s.appendChild(l),s},v={title:"Navigation/Tabs",tags:["autodocs"],argTypes:{selectedTab:{control:"text"},tabs:{control:"array"},onClick:{action:"clicked"},direction:{control:{type:"select"},options:["horizontal","vertical"]}}},x=o=>$({...o}).outerHTML,r=x.bind({});r.args={selectedTab:"My Account",tabs:["My Account","Company","Team Members","Billing"],direction:"horizontal"};const a=x.bind({});a.args={selectedTab:"Profile",tabs:["Dashboard","Profile","Settings","Help"],direction:"vertical"};var b,d,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`args => {
  const tabs = createTabs({
    ...args
  });
  return tabs.outerHTML;
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const tabs = createTabs({
    ...args
  });
  return tabs.outerHTML;
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const h=["Default","VerticalTabs"];export{r as Default,a as VerticalTabs,h as __namedExportsOrder,v as default};
