export const createTabs = ({
	selectedTab = "My Account",
	tabs = ["My Account", "Company", "Team Members", "Billing"],
	onClick = null,
	direction = "horizontal", // Default direction
	href,
	title,
  }) => {
	const wrapper = document.createElement("div");
	wrapper.setAttribute("x-data", `{ tab: '${selectedTab}' }`);
  
	const isVertical = direction === "vertical";
  
	const dropdown = document.createElement("div");
	dropdown.className = "sm:hidden";
	dropdown.innerHTML = `
	  <label for="tabs" class="sr-only">Select a tab</label>
	  <select x-model="tab" id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm">
		${tabs.map((tab) => `<option>${tab}</option>`).join("")}
	  </select>
	`;
  
	const tabNav = document.createElement("div");
	tabNav.className = `hidden sm:block ${isVertical ? "flex flex-col" : "flex items-center space-x-6"}`;
	tabNav.innerHTML = `
	  <div class="${isVertical ? "border-r border-gray-200" : "border-b border-gray-200"}">
		<nav class="${isVertical ? "flex flex-col space-y-2" : "flex items-center space-x-6"}" aria-label="Tabs">
		  ${tabs.map((tab) => `
			  <a href="${href || "#"}"
				 :class="{
				   'border-blue-500 text-blue-600': tab === '${tab}', 
				   '${isVertical ? "border-l-2" : "border-b-2"} ${isVertical ? "pl-2" : "py-2"} ${isVertical ? "border-l-blue-500" : "border-b-blue-500"} text-blue-600': tab === '${tab}',
				   'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700': tab !== '${tab}'
				 }" 
				 @click.prevent="tab = '${tab}'; ${onClick ? onClick(tab) : ''}" 
				 class="whitespace-nowrap px-1 text-sm font-medium">
				${title || tab}
			  </a>`
			)
			.join("")}
		</nav>
	  </div>
	`;
  
	wrapper.appendChild(dropdown);
	wrapper.appendChild(tabNav);
  
	return wrapper;
  };
  