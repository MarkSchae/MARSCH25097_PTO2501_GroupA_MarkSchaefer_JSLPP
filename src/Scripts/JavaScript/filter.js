// Sort/filter into todo/done/doing-column using the status of the task
// Get initial data from external API
// Async function with try catch validation
async function fetchInitialTasks () {
  try {
    // Placeholder alert for loading
    alert('Data is loading, please be patient');
    const responseData = await fetch ('https://jsl-kanban-api.vercel.app/');
    // Check is the response was successful
    if (!responseData.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Parse the reponse/promise into json
    const initialTasks = await responseData.json();
    console.log('Data recieved', initialTasks);

    // Save the initial data to local storage
    // Check if any data with the key 'tasks' exists and save the initial tasks to local storage
    if (!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify(initialTasks));
      console.log('Tasks saved');
    } else {
      console.log('Tasks already exists in the local storage');
    }

  } catch (error) { 
    console.error('The data was not successfully parsed', error);
    // Add error handling here
  }
};

fetchInitialTasks();

/**
 * Filters tasks stored in localStorage into separate arrays based on their status.
 * @function filterTasks
 * @returns {Object} An object containing three arrays:
 *   - {Array<Object>} toDoTasks - Tasks with status 'todo'
 *   - {Array<Object>} doneTasks - Tasks with status 'done'
 *   - {Array<Object>} doingTasks - Tasks with status 'doing'
 */
function filterTasks () {
  const tasksData = localStorage.getItem('tasks');
  const tasks = JSON.parse(tasksData);
  // Define a mapping for priority strings, maps strings to numbers using the keys
  const priorityOrder = { high: 3, medium: 2, low: 1 };
  // Filter the tasks by their status and store them in separate arrays
  const toDoTasks = tasks.filter(task => task.status === 'todo')
  // Sort into descending order using sort. 
  .sort((taskA, taskB) => priorityOrder[taskB.priority] - priorityOrder[taskA.priority]); // Negative number, comes after positive when getting the result of the minus
  const doneTasks = tasks.filter(task => task.status === 'done')
  // Sort into descending order using sort.
  .sort((taskA, taskB) => priorityOrder[taskB.priority] - priorityOrder[taskA.priority]);
  const doingTasks = tasks.filter(task => task.status === 'doing')
  // Sort into descending order using sort.
  .sort((taskA, taskB) => priorityOrder[taskB.priority] - priorityOrder[taskA.priority]);

  return { toDoTasks, doneTasks, doingTasks };
};

filterTasks();

export { filterTasks };
