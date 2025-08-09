// Generate the tasks cards and implement a edit function in which we update the object based on user input 
import './tasks.js';
import './add-task.js';
import { toDoColumn } from './tasks.js';

// Testing a dark mode toggle
const lightDarkToggleBtn = document.getElementById('light-dark-mode-toggle');
lightDarkToggleBtn.addEventListener('click', () => {
    const body = document.getElementById('container-body');
    body.classList.toggle('dark-mode'); // Can use a for each to target all elements with query selectorall
    console.log(toDoColumn);
    console.log('hello');
    console.log(toDoColumn.querySelectorAll('.child'));
    toDoColumn.querySelectorAll(':scope > *').forEach(el => el.classList.toggle('dark-mode-light')); // Might be easier to just give each created div a classname
});

// Testing hide the sidebar feature
const sidebarToggleBtn = document.getElementById('side-bar-toggle');
sidebarToggleBtn.addEventListener('click', () => {
    const sideBar = document.getElementById('side-bar-div');
    sideBar.classList.toggle('sm:hidden');
    const mainGridTasks = document.getElementById('main-tasks-grid');
    mainGridTasks.classList.toggle('sm:col-span-full');
    const newSideBarToggleBtn = document.createElement('button');
    newSideBarToggleBtn.innerHTML = 'SideBar';
    newSideBarToggleBtn.addEventListener('click', () => {
        sideBar.classList.toggle('sm:hidden');
        mainGridTasks.classList.toggle('sm:col-span-full');
        newSideBarToggleBtn.classList = 'hidden';
    });
    mainGridTasks.append(newSideBarToggleBtn);
});







