import { filterTasks } from "./filter";
import { renderTasks } from "./tasks";
import { exitTasksView } from "./detailed-view";
// Testing deletion of tasks
// Get the task that the user is clicking to delete

// Onclick function to display the confirmation message

// Onclick function to remove the task from the local storage and the board when the confirm button is clicked

// Remember to export this function to detailed-view 
function deleteTask (task) {
    const deleteConfirm = confirm("Are you sure you want to delete this task?");
    if (deleteConfirm) {
        const tasksData = localStorage.getItem('tasks');
        const tasks = JSON.parse(tasksData);
        // Filter using the task.id
        const newTasks = tasks.filter(tsk => tsk.id !== task.id);
        // Update the local storage array of the initialTasks
        localStorage.setItem('tasks', JSON.stringify(newTasks));
        filterTasks();
        renderTasks();
        exitTasksView();
        alert("Task deleted");
    } else {
        alert("Deletion canceled");
    }
};

export { deleteTask };