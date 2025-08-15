// Maybe split the code for the dark mode toggle
import { sidebarToggleBtn } from "./side-bar-toggle.js";
// Light/Dark mode toggle
const lightDarkToggleBtn = document.getElementById('light-dark-mode-toggle');
// Function on click that add the dark mode styling to relavent elements
lightDarkToggleBtn.addEventListener('click', () => {
    // Toggle the background of the button container
    lightDarkToggleBtn.classList.toggle('bg-[#F4F7FD]');
    lightDarkToggleBtn.classList.toggle('bg-[#635FC7]');
    // Toggle the background of the dark/light mode 'switch' element
    const darkModeSwitch = document.getElementById('dark-mode-switch-container');
    darkModeSwitch.classList.toggle('bg-[#635FC7]');
    darkModeSwitch.classList.toggle('bg-[#20212C]');
    // Move the nested switch element from side to side when clicked
    const moveSwitch = document.getElementById('dark-mode-switch-movement');
    moveSwitch.classList.toggle('left-0.5');
    moveSwitch.classList.toggle('right-0.5');
    // Toggle the background of the sidebar button for dark/light mode 
    sidebarToggleBtn.classList.toggle('bg-[#F4F7FD]');
    sidebarToggleBtn.classList.toggle('bg-[#635FC7]');
    // Toggle the color of the sidebar text for dark mode
    sidebarToggleBtn.classList.toggle('text-[#635FC7]');
    sidebarToggleBtn.classList.toggle('text-white');
    const body = document.getElementById('container-body');
    body.classList.toggle('dark-mode');
    const taskCards = document.querySelectorAll('.tasks-divs');
    taskCards.forEach(card => 
        card.classList.toggle('dark-mode-light')
    );
    // Toggle the kanban logo for light and dark modes
    const logo = document.getElementById('kanban-logo-img');
    if (logo.src.endsWith('/images/logo-light.svg')) {
        logo.src = '/images/logo-dark.svg';
    } else if (logo.src.endsWith('/images/logo-dark.svg')) {// Use endsWith as it checks the path at the end of the returned full url
        logo.src = '/images/logo-light.svg';
    }
    // Toggle the elements in the detailed card view
    const detailedTaskCard = document.getElementById('detailed-task-card');
    const addTaskCard = document.getElementById('add-task-modal'); // Can do this with a class name and for each in future
    //const taskHeading = document.getElementsByTagName('h6');
    //taskHeading.classList.toggle('');
    detailedTaskCard.classList.toggle('bg-white');
    addTaskCard.classList.toggle('bg-white');
    detailedTaskCard.classList.toggle('bg-[#2B2C37]');
    addTaskCard.classList.toggle('bg-[#2B2C37]');
    // Toggle the backdrop
    const backdrop = document.getElementById('backdrop');
    backdrop.classList.toggle('bg-black/50');
    backdrop.classList.toggle('bg-black/80');
});

