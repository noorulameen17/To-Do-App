
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const addButton = document.getElementById('add-todo');

    addButton.addEventListener('click', () => {
      if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        li.className = 'flex justify-between items-center bg-gray-200 p-2 rounded-lg';
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600';
        deleteButton.addEventListener('click', () => {
          li.remove();
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
        input.value = '';
      }
    });