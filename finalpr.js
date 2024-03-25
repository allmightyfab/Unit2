class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    markAsCompleted() {
        this.completed = true;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const clearTasksBtn = document.getElementById('clearTasksBtn');
    const tasksList = document.getElementById('tasks');

    addTaskBtn.addEventListener('click', function() {
        const taskDescription = taskInput.value.trim();
        if (taskDescription !== '') {
            const task = new Task(taskDescription);
            addTaskToList(task);
            taskInput.value = ''; 
        }
    });

    clearTasksBtn.addEventListener('click', function() {
        tasksList.innerHTML = ''; 
    });

    function addTaskToList(task) {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.description;
        
        // Add delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function(event) {
            tasksList.removeChild(taskItem);
            event.stopPropagation(); // Prevent li click event from firing
        });
        
        taskItem.appendChild(deleteBtn);
        
        if (task.completed) {
            taskItem.classList.add('completed');
        }
        
        taskItem.addEventListener('click', function() {
            task.markAsCompleted();
            taskItem.classList.add('completed');
        });
        
        tasksList.appendChild(taskItem);
    }
});
