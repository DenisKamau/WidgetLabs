// Accordion.stories.js
import { createAccordion } from './Accordion';

export default {
  title: 'Data Display/Accordion',
  argTypes: {
    sections: { 
      control: 'object', 
      defaultValue: [
        {
          title: '22 Jan 2022 at 9:34:12 PM',
          content: `
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
          `,
        },
        {
          title: '23 Jan 2022 at 10:15:00 AM',
          content: `
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
          `,
        },
        // Add more sections as needed
      ]
    },
  },
};

const Template = (args) => {
  const container = document.createElement('div');
  const accordion = createAccordion({ ...args });
  container.appendChild(accordion);
  return container;
};

export const Default = Template.bind({});
Default.args = {
  sections: [
    {
      title: '22 Jan 2022 at 9:34:12 PM',
      content: `
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
      `,
    },
    {
      title: '23 Jan 2022 at 10:15:00 AM',
      content: `
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
      `,
    },
  ],
};
