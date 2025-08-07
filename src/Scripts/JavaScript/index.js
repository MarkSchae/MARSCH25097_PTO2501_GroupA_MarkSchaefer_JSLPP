// Generate the tasks cards and implement a edit function in which we update the object based on user input 
import './tasks.js';
import './add-task.js';
import { toDoColumn } from './tasks.js';

// Testing a dark mode toggle
const lightDarkToggle = document.getElementById('light-dark-mode-toggle');
lightDarkToggle.addEventListener('click', () => {
    const body = document.getElementById('container-body');
    body.classList.toggle('dark-mode'); // Can use a for each to target all elements with query selectorall
    console.log(toDoColumn);
    console.log('hello');
    console.log(toDoColumn.querySelectorAll('.child'));
    toDoColumn.querySelectorAll(':scope > *').forEach(el => el.classList.toggle('dark-mode-light')); // Might be easier to just give each created div a classname
});







