// Accordion.js
export const createAccordion = ({ sections = [] } = {}) => {
	const container = document.createElement("div");
	container.className = "space-y-2";
	container.setAttribute("x-data", "{ openSection: null }");

	sections.forEach((section, index) => {
		const sectionContainer = document.createElement("div");
		sectionContainer.className = "bg-white rounded-[8px] border border-[#EAECF0] duration-300";

		const button = document.createElement("button");
		button.className = "p-4 w-full text-left flex items-center justify-between";
		button.setAttribute("type", "button");
		button.setAttribute(
			"x-on:click",
			`openSection = openSection === ${index + 1} ? null : ${index + 1}`
		);

		const title = document.createElement("h3");
		title.className = "text-gray-900 text-sm font-medium leading-tight";
		title.textContent = section.title;

		const icon = document.createElement("div");
		icon.innerHTML = `
            <svg x-bind:class="openSection === ${index + 1} ? 'rotate-180' : null"
				class="duration-300" xmlns="http://www.w3.org/2000/svg" width="20"
				height="20" viewBox="0 0 20 20" fill="none">
				<path d="M5 7.5L10 12.5L15 7.5" stroke="#667085" stroke-width="2"
					stroke-linecap="round" stroke-linejoin="round" />
			</svg>
        `;

		button.appendChild(title);
		button.appendChild(icon);

		const content = document.createElement("div");
		content.className = "px-4 border-t";
		content.setAttribute("x-show", `openSection === ${index + 1}`);
		content.setAttribute("x-transition:enter", "transition ease-out duration-300");
		content.setAttribute("x-transition:enter-start", "opacity-0 transform translate-y-4");
		content.setAttribute("x-transition:enter-end", "opacity-100 transform translate-y-0");
		content.setAttribute("x-transition:leave", "transition ease-in duration-300");
		content.setAttribute("x-transition:leave-start", "opacity-100 transform translate-y-0");
		content.setAttribute("x-transition:leave-end", "opacity-0 transform translate-y-4");

		const contentInner = document.createElement("div");
		contentInner.className = "flex-col justify-start items-start flex";
		contentInner.innerHTML = section.content; // Assuming section.content contains HTML structure

		content.appendChild(contentInner);

		sectionContainer.appendChild(button);
		sectionContainer.appendChild(content);
		container.appendChild(sectionContainer);
	});

	return container;
};
