import { saveChanges } from './save-edits.js';
import { deleteTask } from './delete-task.js';

/**
 * Functionality to open the detailed task view 
 * @param {*object} task - parsed into this function to be used to access and display the elements of the task that the user clicked on 
 * @param {*HTMLElement} taskDiv - parse the specific column element (into the save changes function) so that the element can be moved to a new column based on the status if the status was edited 
 * @returns {*void} updates the DOM by showing the modal/card elements and inserting the task content 
 */
function detailedTasksView (task, taskDiv) {
  // Delete existing button elements
  const existingButton = document.getElementById('btn-save-changes');
  if (existingButton) {
    existingButton.remove();
  }
  const oldDeleteBtn = document.getElementById('delete-task-btn');
  if (oldDeleteBtn) {
    oldDeleteBtn.remove();
  }
  // Save changes/edits button
  const button = document.createElement('button');
  button.id = 'btn-save-changes';
  button.innerHTML = 'Save Changes';
  button.className = 'click-hover button-default';
  button.addEventListener('click', () => saveChanges(task, taskDiv));
  const detailedTaskCard = document.getElementById('detailed-task-card');
  // Delete/remove task
  const deleteBtn = document.createElement('button');
  deleteBtn.id = 'delete-task-btn';
  deleteBtn.innerHTML = 'Delete Task';
  deleteBtn.className = 'click-hover button-default';
  deleteBtn.addEventListener('click', () => deleteTask(task));
  detailedTaskCard.appendChild(deleteBtn);
  detailedTaskCard.appendChild(button);
  const overlay = document.getElementById('backdrop');
  if (detailedTaskCard.classList.contains('hidden')) {
    detailedTaskCard.classList.remove('hidden');
    detailedTaskCard.classList.add('detailed-card-styling');
    overlay.classList.remove('hidden');
    document.getElementById('edit-title').value = task.title;
    document.getElementById('edit-description').value = task.description;
    document.getElementById('edit-task-status').value = task.status;
    document.getElementById('edit-task-priority').value = task.priority;
  }
};

// Might need to moduralize the exit button function
// The function to return the page to normal when exiting the detailed view
function exitTasksView () {
  const detailedTaskCard = document.getElementById('detailed-task-card');
  const taskModal = document.getElementById('add-task-modal');
  const overlay = document.getElementById('backdrop'); 
  detailedTaskCard.classList.add('hidden');
  taskModal.classList.add('hidden');
  detailedTaskCard.classList.remove('detailed-card-styling');
  taskModal.classList.remove('detailed-card-styling');
  overlay.classList.add('hidden');
};

export { detailedTasksView, exitTasksView };