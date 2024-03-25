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
    const tasksList = document.getElementById('tasks');

    addTaskBtn.addEventListener('click', function() {
        const taskDescription = taskInput.value.trim();
        if (taskDescription !== '') {
            const task = new Task(taskDescription);
            addTaskToList(task);
            taskInput.value = ''; 
        }
    });

    function addTaskToList(task) {
        const taskItem = document.createElement('li');
        taskItem.textContent = task.description;
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
