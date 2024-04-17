

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('inputId');
    const addBtn = document.getElementById('addBtn');
    const taskList = document.getElementById('taskList');
  
    let tasks = [];
  
    addBtn.addEventListener('click', function () {
      const taskText = input.value.trim();
      if (taskText !== '') {
        tasks.push(taskText);
        renderTasks();
        input.value = '';
      }
    });
  
    function renderTasks() {
      taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.draggable = true;
        li.dataset.index = index;
        li.textContent = task;
        
        const editBtn = document.createElement('button');
        editBtn.classList.add('btn', 'btn-info', 'btn-sm', 'mr-2');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
          const newTaskText = prompt('Enter new task text:', task);
          if (newTaskText !== null) {
            tasks[index] = newTaskText.trim();
            renderTasks();
          }
        });
  
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('btn', 'btn-danger', 'btn-sm');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', function () {
          tasks.splice(index, 1);
          renderTasks();
        });
  
        li.appendChild(editBtn);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
      });
    }
  
    taskList.addEventListener('dragstart', function (event) {
      event.dataTransfer.setData('text/plain', event.target.dataset.index);
    });
  
    taskList.addEventListener('dragover', function (event) {
      event.preventDefault();
      const dragOverElement = event.target.closest('li');
      if (dragOverElement) {
        const draggingIndex = event.dataTransfer.getData('text/plain');
        const dropIndex = dragOverElement.dataset.index;
        if (draggingIndex !== dropIndex) {
          const tasksCopy = tasks.slice();
          const [draggingTask] = tasksCopy.splice(draggingIndex, 1);
          tasksCopy.splice(dropIndex, 0, draggingTask);
          tasks = tasksCopy;
          renderTasks();
        }
      }
    });
    
    renderTasks();
  });
  