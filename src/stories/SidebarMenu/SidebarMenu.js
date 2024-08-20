export const createSidebarMenu = () => {
    // Create the main container
    const container = document.createElement('div');
    container.className = 'flex grow flex-col gap-y-2 overflow-y-auto border-r border-gray-200 bg-white px-6 max-w-xs';
  
    // Logo Section
    const logoDiv = document.createElement('div');
    logoDiv.className = 'flex py-4 shrink-0 items-center';
    const logoImg = document.createElement('img');
    logoImg.className = 'h-8 w-auto';
    // Replace the provided image URL with a placeholder image
    logoImg.src = 'https://via.placeholder.com/150';
    logoImg.alt = 'Your Company';
    logoDiv.appendChild(logoImg);
  
    // Navigation
    const nav = document.createElement('nav');
    nav.className = 'flex flex-1 flex-col';
  
    // Main list
    const ulMain = document.createElement('ul');
    ulMain.role = 'list';
    ulMain.className = 'flex flex-1 flex-col';
  
    // Dashboard item
    const liDashboard = document.createElement('li');
    const aDashboard = document.createElement('a');
    aDashboard.href = '#';
    aDashboard.className = 'block w-full rounded-md bg-gray-50 py-2 pl-10 pr-2 text-sm font-semibold leading-6 text-gray-700';
    aDashboard.textContent = 'Dashboard';
    liDashboard.appendChild(aDashboard);
  
    // Teams item with sub-menu
    const liTeams = document.createElement('li');
    liTeams.setAttribute('x-data', '{ open: false }');
    const buttonTeams = document.createElement('button');
    buttonTeams.type = 'button';
    buttonTeams.className = 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50';
    buttonTeams.setAttribute('aria-controls', 'sub-menu-1');
    buttonTeams.setAttribute('aria-expanded', 'false');
    buttonTeams.setAttribute('x-on:click', 'open = !open');
    buttonTeams.textContent = 'Teams';
    
    const svgTeams = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgTeams.setAttribute('class', 'h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200'); // Added transition classes
    svgTeams.setAttribute('viewBox', '0 0 20 20');
    svgTeams.setAttribute('fill', 'currentColor');
    svgTeams.setAttribute(':class', "{'rotate-90 text-gray-500': open, 'text-gray-400': !open}"); // Use Alpine.js to toggle class
    svgTeams.innerHTML = '<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />';
    buttonTeams.prepend(svgTeams);
    
    const ulTeams = document.createElement('ul');
    ulTeams.className = 'mt-1 px-2';
    ulTeams.id = 'sub-menu-1';
    ulTeams.setAttribute('x-show', 'open');
    ulTeams.setAttribute('x-cloak', '');
  
    ['Engineering', 'Human Resources', 'Customer Success'].forEach(team => {
      const liTeam = document.createElement('li');
      const aTeam = document.createElement('a');
      aTeam.href = '#';
      aTeam.className = 'block w-full rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700 hover:bg-gray-50';
      aTeam.textContent = team;
      liTeam.appendChild(aTeam);
      ulTeams.appendChild(liTeam);
    });
  
    liTeams.appendChild(buttonTeams);
    liTeams.appendChild(ulTeams);
  
    // Projects item with sub-menu
    const liProjects = document.createElement('li');
    liProjects.setAttribute('x-data', '{ open: false }');
    const buttonProjects = document.createElement('button');
    buttonProjects.type = 'button';
    buttonProjects.className = 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50';
    buttonProjects.setAttribute('aria-controls', 'sub-menu-2');
    buttonProjects.setAttribute('aria-expanded', 'false');
    buttonProjects.setAttribute('x-on:click', 'open = !open');
    buttonProjects.textContent = 'Projects';
    
    const svgProjects = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgProjects.setAttribute('class', 'h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200'); // Added transition classes
    svgProjects.setAttribute('viewBox', '0 0 20 20');
    svgProjects.setAttribute('fill', 'currentColor');
    svgProjects.setAttribute(':class', "{'rotate-90 text-gray-500': open, 'text-gray-400': !open}"); // Use Alpine.js to toggle class
    svgProjects.innerHTML = '<path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />';
    buttonProjects.prepend(svgProjects);
    
    const ulProjects = document.createElement('ul');
    ulProjects.className = 'mt-1 px-2';
    ulProjects.id = 'sub-menu-2';
    ulProjects.setAttribute('x-show', 'open');
    ulProjects.setAttribute('x-cloak', '');
  
    ['GraphQL API', 'iOS App', 'Android App', 'New Customer Portal'].forEach(project => {
      const liProject = document.createElement('li');
      const aProject = document.createElement('a');
      aProject.href = '#';
      aProject.className = 'block w-full rounded-md py-2 pl-9 pr-2 text-sm leading-6 text-gray-700 hover:bg-gray-50';
      aProject.textContent = project;
      liProject.appendChild(aProject);
      ulProjects.appendChild(liProject);
    });
  
    liProjects.appendChild(buttonProjects);
    liProjects.appendChild(ulProjects);
  
    // Other static menu items
    const menuItems = [
      { name: 'Calendar', href: '#' },
      { name: 'Documents', href: '#' },
      { name: 'Reports', href: '#' },
    ];
  
    menuItems.forEach(item => {
      const liItem = document.createElement('li');
      const aItem = document.createElement('a');
      aItem.href = item.href;
      aItem.className = 'block w-full rounded-md py-2 pl-10 pr-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50';
      aItem.textContent = item.name;
      liItem.appendChild(aItem);
      ulMain.appendChild(liItem);
    });
  
    // Append the navigation items to the container
    ulMain.appendChild(liDashboard);
    ulMain.appendChild(liTeams);
    ulMain.appendChild(liProjects);
    nav.appendChild(ulMain);
    container.appendChild(logoDiv);
    container.appendChild(nav);
  
    // Profile section (outside the main ul)
    const aProfile = document.createElement('a');
    aProfile.href = '#';
    aProfile.className = 'flex items-center gap-x-4 py-4 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 mt-auto';
    
    const imgProfile = document.createElement('img');
    imgProfile.className = 'h-8 w-8 rounded-full bg-gray-50';
    // Replace the provided image URL with a placeholder image
    imgProfile.src = 'https://via.placeholder.com/150';
    imgProfile.alt = 'Profile Image';
  
    const spanProfile = document.createElement('span');
    spanProfile.setAttribute('aria-hidden', 'true');
    spanProfile.textContent = 'Tom Cook';
  
    aProfile.appendChild(imgProfile);
    aProfile.appendChild(spanProfile);
    container.appendChild(aProfile);
  
    return container;
  };
  