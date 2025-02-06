const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText.trim() !== "") { // Check if the input is not empty
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span'); // Add a span for the task text
        taskSpan.textContent = taskText;
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        listItem.appendChild(taskSpan); // Append the span first
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

        taskInput.value = ''; // Clear the input field

        completeButton.addEventListener('click', () => {
            taskSpan.classList.toggle('completed'); // Toggle the 'completed' class
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
    }
});