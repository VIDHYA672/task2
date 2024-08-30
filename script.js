function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
            <button onclick="toggleComplete(this)">Complete</button>
        </div>
    `;
    
    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function editTask(button) {
    const taskItem = button.closest('li');
    const taskText = taskItem.querySelector('span');
    
    const newText = prompt('Edit your task:', taskText.textContent);
    
    if (newText !== null) {
        taskText.textContent = newText.trim();
    }
}

function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}

function toggleComplete(button) {
    const taskItem = button.closest('li');
    taskItem.classList.toggle('completed');
}
