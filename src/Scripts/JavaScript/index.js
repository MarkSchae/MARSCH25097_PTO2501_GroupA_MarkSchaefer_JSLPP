// Generate the tasks cards and implement a edit function in which we update the object based on user input 
import './tasks.js';
import './add-task.js';

// Light/Dark mode toggle
const lightDarkToggleBtn = document.getElementById('light-dark-mode-toggle');
// Function on click that add the dark mode styling to relavent elements
lightDarkToggleBtn.addEventListener('click', () => {
    const body = document.getElementById('container-body');
    body.classList.toggle('dark-mode');
    const taskCards = document.querySelectorAll('.tasks-divs');
    taskCards.forEach(card => 
        card.classList.toggle('dark-mode-light')
    );
    const logo = document.getElementById('kanban-logo-img');
    if (logo.src.endsWith('/images/logo-light.svg')) {
        logo.src = '/images/logo-dark.svg';
    } else if (logo.src.endsWith('/images/logo-dark.svg')) {// Use endsWith as it checks the path at the end of the returned full url
        logo.src = '/images/logo-light.svg';
    }
    
});

// Hide/Show the sidebar
const sidebarToggleBtn = document.getElementById('side-bar-toggle');
// Function to hide/show the sidebar element. Ensure that the layout adapts to keep its syling and take up the available space left by the hidden sidebar
sidebarToggleBtn.addEventListener('click', () => {
    const sideBar = document.getElementById('side-bar-div');
    sideBar.classList.toggle('sm:hidden');
    const mainGridTasks = document.getElementById('main-tasks-grid');
    mainGridTasks.classList.toggle('sm:col-span-full');
    // Creating a new element to show the sidebar. Toggle between hiding the 2 elements.
    const newSideBarToggleBtn = document.createElement('img');
    newSideBarToggleBtn.src = '/images/icon-show-sidebar.svg';
    newSideBarToggleBtn.classList = 'flex flex-col mt-auto fixed bottom-0 left-0 w-[56px] h-[48px] bg-[#635FC7] rounded-tr-[100px] rounded-br-[100px]';
    newSideBarToggleBtn.addEventListener('click', () => {
        sideBar.classList.toggle('sm:hidden');
        mainGridTasks.classList.toggle('sm:col-span-full');
        newSideBarToggleBtn.classList = 'hidden';
    });
    mainGridTasks.append(newSideBarToggleBtn);
});







