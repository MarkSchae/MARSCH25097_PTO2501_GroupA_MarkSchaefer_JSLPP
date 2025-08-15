// Testing drag and drop functionality 
// Get all tasks elements
const tasksDivs = document.querySelectorAll('.tasks-divs');
// For each task element, add an event listner for mousedown (drag)
tasksDivs.forEach((task) => {
  task.addEventListener('mousedown', (drag) => {
    drag.preventDefault(); // Prevents text highlight on mousedown

    // Store the offset between the mouse and the element’s top-left corner, code from chatgpt
    const rect = task.getBoundingClientRect(); // Get elements box position in viewport coordinates
    // Prevent the element from jumping to a certian position based on where the user has the cursor for the drag
    const shiftX = drag.clientX - rect.left;
    const shiftY = drag.clientY - rect.top;

    // Apply temporary styles for dragging
    task.style.position = 'absolute';
    task.style.zIndex = '1000';

    // Setting the positioning of the cursor to stay the same as the element is dragged across the screen, code from chatgpt
    const moveAt = (event) => {
      task.style.left = event.pageX - shiftX + 'px'; // Px because css expects a px value for the movement
      task.style.top = event.pageY - shiftY + 'px';
    };

    // Start moving immediately by calling the movement function
    moveAt(drag);

    document.addEventListener('mousemove', moveAt); // The element follows the mouse at higher speeds

    document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', moveAt); // Stops the elements from sticking to the cursor
        // Remove all added styles in order for the element to move back to its original position
        task.removeAttribute('style');
      },
      { once: true }
    );
  });
});



