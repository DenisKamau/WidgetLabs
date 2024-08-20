const m=({sections:o=[]}={})=>{const e=document.createElement("div");return e.className="space-y-2",e.setAttribute("x-data","{ openSection: null }"),o.forEach((n,a)=>{const l=document.createElement("div");l.className="bg-white rounded-[8px] border border-[#EAECF0] duration-300";const i=document.createElement("button");i.className="p-4 w-full text-left flex items-center justify-between",i.setAttribute("type","button"),i.setAttribute("x-on:click",`openSection = openSection === ${a+1} ? null : ${a+1}`);const r=document.createElement("h3");r.className="text-gray-900 text-sm font-medium leading-tight",r.textContent=n.title;const c=document.createElement("div");c.innerHTML=`
            <svg x-bind:class="openSection === ${a+1} ? 'rotate-180' : null"
				class="duration-300" xmlns="http://www.w3.org/2000/svg" width="20"
				height="20" viewBox="0 0 20 20" fill="none">
				<path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" stroke-width="2"
					stroke-linecap="round" stroke-linejoin="round" />
			</svg>
        `,i.appendChild(r),i.appendChild(c);const t=document.createElement("div");t.className="px-4 border-t",t.setAttribute("x-show",`openSection === ${a+1}`),t.setAttribute("x-transition:enter","transition ease-out duration-300"),t.setAttribute("x-transition:enter-start","opacity-0 transform translate-y-4"),t.setAttribute("x-transition:enter-end","opacity-100 transform translate-y-0"),t.setAttribute("x-transition:leave","transition ease-in duration-300"),t.setAttribute("x-transition:leave-start","opacity-100 transform translate-y-0"),t.setAttribute("x-transition:leave-end","opacity-0 transform translate-y-4");const d=document.createElement("div");d.className="flex-col justify-start items-start flex",d.innerHTML=n.content,t.appendChild(d),l.appendChild(i),l.appendChild(t),e.appendChild(l)}),e},g={title:"Data Display/Accordion",argTypes:{sections:{control:"object",defaultValue:[{title:"22 Jan 2022 at 9:34:12 PM",content:`
            <div class="w-full h-11 flex-col justify-start items-start flex">
              <div class="w-full py-3 justify-between items-center flex">
                <div class="text-slate-600 text-sm font-normal leading-tight">Hospital</div>
                <div class="text-right text-gray-900 text-sm font-normal leading-tight">Pangani Hospital</div>
              </div>
            </div>
            <div class="w-full h-[45px] flex-col justify-start items-start flex">
              <div class="w-full h-px bg-gray-200"></div>
              <div class="w-full py-3 justify-between items-center flex">
                <div class="text-slate-600 text-sm font-normal leading-tight">Date of visit</div>
                <div class="text-right text-gray-900 text-sm font-normal leading-tight">12th Jan 2024</div>
              </div>
            </div>
            <!-- Add other content as needed -->
          `},{title:"23 Jan 2022 at 10:15:00 AM",content:`
            <div class="w-full h-11 flex-col justify-start items-start flex">
              <div class="w-full py-3 justify-between items-center flex">
                <div class="text-slate-600 text-sm font-normal leading-tight">Hospital</div>
                <div class="text-right text-gray-900 text-sm font-normal leading-tight">Central Hospital</div>
              </div>
            </div>
            <div class="w-full h-[45px] flex-col justify-start items-start flex">
              <div class="w-full h-px bg-gray-200"></div>
              <div class="w-full py-3 justify-between items-center flex">
                <div class="text-slate-600 text-sm font-normal leading-tight">Date of visit</div>
                <div class="text-right text-gray-900 text-sm font-normal leading-tight">14th Jan 2024</div>
              </div>
            </div>
            <!-- Add other content as needed -->
          `}]}}},u=o=>{const e=document.createElement("div"),n=m({...o});return e.appendChild(n),e},s=u.bind({});s.args={sections:[{title:"22 Jan 2022 at 9:34:12 PM",content:`
        <div class="w-full h-11 flex-col justify-start items-start flex">
          <div class="w-full py-3 justify-between items-center flex">
            <div class="text-slate-600 text-sm font-normal leading-tight">Hospital</div>
            <div class="text-right text-gray-900 text-sm font-normal leading-tight">Pangani Hospital</div>
          </div>
        </div>
        <div class="w-full h-[45px] flex-col justify-start items-start flex">
          <div class="w-full h-px bg-gray-200"></div>
          <div class="w-full py-3 justify-between items-center flex">
            <div class="text-slate-600 text-sm font-normal leading-tight">Date of visit</div>
            <div class="text-right text-gray-900 text-sm font-normal leading-tight">12th Jan 2024</div>
          </div>
        </div>
        <!-- Add other content as needed -->
      `},{title:"23 Jan 2022 at 10:15:00 AM",content:`
        <div class="w-full h-11 flex-col justify-start items-start flex">
          <div class="w-full py-3 justify-between items-center flex">
            <div class="text-slate-600 text-sm font-normal leading-tight">Hospital</div>
            <div class="text-right text-gray-900 text-sm font-normal leading-tight">Central Hospital</div>
          </div>
        </div>
        <div class="w-full h-[45px] flex-col justify-start items-start flex">
          <div class="w-full h-px bg-gray-200"></div>
          <div class="w-full py-3 justify-between items-center flex">
            <div class="text-slate-600 text-sm font-normal leading-tight">Date of visit</div>
            <div class="text-right text-gray-900 text-sm font-normal leading-tight">14th Jan 2024</div>
          </div>
        </div>
        <!-- Add other content as needed -->
      `}]};var f,x,v;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const accordion = createAccordion({
    ...args
  });
  container.appendChild(accordion);
  return container;
}`,...(v=(x=s.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const p=["Default"];export{s as Default,p as __namedExportsOrder,g as default};
