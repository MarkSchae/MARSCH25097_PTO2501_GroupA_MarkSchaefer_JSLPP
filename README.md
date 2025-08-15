# JSL-PP Kanban Board

A responsive Kanban board built with **HTML**, **Tailwind CSS**, and **JavaScript**, designed to help users visualize tasks across various progress stages. The layout is responsive for both desktop and mobile screens, styled to match a Figma design, and incorporates dynamic interactivity.

---

## 📌 Board Structure

The board contains **three primary columns**:

- **To Do** – Tasks that need to be started  
- **Doing** – Tasks currently in progress  
- **Done** – Completed tasks  

Each task is a card that moves across columns as its status changes.

---

## 🎯 Project Purpose

- Clearly visualize tasks and workflow  
- Improve task flow efficiency  
- Foster collaboration and transparency  

---

## 🛠️ Technologies Used

- HTML5  
- Tailwind CSS  
- JavaScript  
- Google Fonts (Plus Jakarta Sans)  

---

## 🚀 Features

- **Responsive grid layout** using Tailwind  
- **Mobile-first design** with a collapsible sidebar  
- **Add, edit, and delete tasks**, persisted in `localStorage`  
- **Click-to-edit modal interface** for task details  
- **Drag-and-drop** tasks across columns  
- **Priority ordering** for high, medium, and low priority tasks  
- **Light/Dark theme toggle**  
- **Dynamic sorting and rendering** of tasks in the DOM  

---

## 🧱 Setup Instructions

1. Clone the repository or download the project files.  
2. Ensure **Node.js** and **npm** are installed.  
3. Install and compile Tailwind (if using local build):
```bash
npx tailwindcss -i ./src/Styles/StyleSheets/input.css -o ./src/Styles/StyleSheets/output.css --watch
Open index.html in a browser using Live Server for live reloading.

You should see the Kanban board with responsive columns and interactive task cards.

🚀 Deployment
Hosted on Netlify for live demo access.

GitHub repository connected to Netlify for automatic build and deployment on push.

Live testing allowed for responsiveness, drag-and-drop, and theme toggle.

🛠️ JavaScript Functionality
1. Initial Data Fetching & Loading
js
Copy
Edit
async function fetchInitialTasks() {
  try {
    alert('Loading tasks...');
    const response = await fetch('https://jsl-kanban-api.vercel.app/');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const initialTasks = await response.json();
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(initialTasks));
    }
  } catch (error) {
    console.error('Failed to fetch tasks', error);
  }
}
fetchInitialTasks();
Fetches tasks from an external API and persists them in localStorage.

try-catch handles errors; await ensures JSON parsing is complete before rendering.

2. Data Persistence
Tasks are saved in localStorage as an array of objects.

All edits, deletions, and additions update both DOM and localStorage.

3. Task Rendering
js
Copy
Edit
function renderTasks() {
  const { toDoTasks, doingTasks, doneTasks } = filterTasks();
  document.querySelectorAll('.tasks-divs').forEach(task => task.remove());

  toDoTasks.forEach(task => createTaskCard(task, 'todo-column'));
  doingTasks.forEach(task => createTaskCard(task, 'doing-column'));
  doneTasks.forEach(task => createTaskCard(task, 'done-column'));
}
createTaskCard dynamically generates task elements.

Event listeners enable edit modal and priority styling.

4. Editing & Deletion
js
Copy
Edit
const newTasks = tasks.filter(t => t.id !== task.id); // deletion
localStorage.setItem('tasks', JSON.stringify(newTasks));
Clicking a task opens a modal for editing.

Updates reflect instantly in both DOM and localStorage.

Deletion removes tasks from storage and DOM simultaneously.

5. Sidebar & Mobile Sidebar
Sidebar collapses on mobile using:

js
Copy
Edit
sideBar.classList.toggle('hidden');
Toggle button remains visible using absolute positioning.

Layout adjusts automatically with Tailwind’s responsive classes.

6. Theme Toggle (Light/Dark Mode)
js
Copy
Edit
document.body.classList.toggle('dark-mode');
Child elements inherit styles based on .dark-mode.

Supports dynamic color changes for cards and priority indicators.

7. Priority & Ordering
js
Copy
Edit
const priorityOrder = { high: 3, medium: 2, low: 1 };
tasks.sort((a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]);
High, medium, and low priorities are sorted numerically.

Tasks are rendered in descending priority order within columns.

8. Drag & Drop Functionality
Task cards are draggable using mousedown, mousemove, and mouseup.

Moving a card updates its column status and localStorage immediately.

Enables intuitive workflow reordering.

9. Example Task Card HTML Structure
html
Copy
Edit
<div class="tasks-divs card-styling click-hover">
  Task Title
  <div class="priority-indicator bg-red"></div>
</div>
🛠️ Future Improvements
Backend integration for server-side persistence.

Enhanced drag-and-drop with smoother animations.

Notifications or due date alerts.

More advanced filtering and search functionality.