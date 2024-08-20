export const createDropdown = ({
    trigger = "click",
    overlay = [],
    disabled = false,
    overlayClassName = "",
    overlayStyle = {},
    onVisibleChange = null,
  }) => {
    const wrapper = document.createElement("div");
    wrapper.className = `relative inline-block text-left ${disabled ? "opacity-50 pointer-events-none" : ""}`;
    wrapper.setAttribute("x-data", `{ open: false }`);
  
    // Button
    const button = document.createElement("button");
    button.type = "button";
    button.className =
      "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50";
    button.id = "menu-button";
    button.setAttribute("aria-haspopup", "true");
    button.innerHTML = `Options
      <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>`;
  
    // Visibility toggle based on trigger type
    if (trigger === "click") {
      button.setAttribute("x-on:click", "open = !open; if ($event.detail !== 0) { onVisibleChange(open) }");
    } else if (trigger === "hover") {
      wrapper.setAttribute("x-on:mouseenter", "open = true; onVisibleChange(open)");
      wrapper.setAttribute("x-on:mouseleave", "open = false; onVisibleChange(open)");
    }
  
    // Dropdown Menu
    const dropdownMenu = document.createElement("div");
    dropdownMenu.className = `absolute z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${overlayClassName}`;
    dropdownMenu.style = overlayStyle;
    dropdownMenu.setAttribute("role", "menu");
    dropdownMenu.setAttribute("aria-orientation", "vertical");
    dropdownMenu.setAttribute("aria-labelledby", "menu-button");
    dropdownMenu.setAttribute("tabindex", "-1");
    dropdownMenu.setAttribute("x-show", "open"); // Show/hide menu based on 'open' state
    dropdownMenu.setAttribute("x-transition", ""); // Add transition effect
  
    const menuItems = overlay.map((item, index) => {
      const menuItem = document.createElement(item.type === "button" ? "button" : "a");
      menuItem.className = `block w-full px-4 py-2 text-left text-sm text-gray-700 ${item.active ? "bg-gray-100 text-gray-900" : "hover:bg-gray-100 hover:text-gray-900"}`;
      menuItem.setAttribute("role", "menuitem");
      menuItem.setAttribute("tabindex", "-1");
      menuItem.id = `menu-item-${index}`;
  
      if (item.type === "link") {
        menuItem.href = item.href || "#";
      }
  
      menuItem.textContent = item.label;
  
      if (item.onClick && item.type === "button") {
        menuItem.addEventListener("click", item.onClick);
      }
  
      return menuItem;
    });
  
    menuItems.forEach((item) => dropdownMenu.appendChild(item));
  
    wrapper.appendChild(button);
    wrapper.appendChild(dropdownMenu);
  
    return wrapper;
  };
  