
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTodo() {
  const todoText = todoInput.value.trim();
  
  if (todoText) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    
    todoItem.innerHTML = ` 
      <div class="d-flex align-items-center">
        <input type="checkbox" class="form-check-input me-2" onchange="toggleCompletion(this)">
        <span>${todoText}</span>
      </div>
      <button class="btn btn-danger btn-sm ms-auto" onclick="removeTodo(this)">Delete</button>
    `;
    
    const todoTextSpan = todoItem.querySelector('span');
    todoTextSpan.addEventListener('click', () => {
      const checkbox = todoItem.querySelector('input[type="checkbox"]');
      checkbox.checked = !checkbox.checked; 
      toggleCompletion(checkbox);  
    });
    
    todoList.appendChild(todoItem);
    todoInput.value = ''; 
  }
}

function removeTodo(button) {
  const todoItem = button.parentElement;
  todoList.removeChild(todoItem);  
}

function toggleCompletion(checkbox) {
  const todoItem = checkbox.parentElement;  
  const todoText = todoItem.querySelector('span');
  
  if (checkbox.checked) {
    todoText.style.textDecoration = 'line-through';  
  } else {
    todoText.style.textDecoration = 'none'; 
  }
}

addButton.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});
