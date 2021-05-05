import todos from './data.js';

// Variable Declarations
const ul = document.body.appendChild(document.createElement('ul'));
const todosCounter = document.querySelector('#todos-counter');

// Function Declarations
function renderTodos(todoItems) {
  ul.innerHTML = todoItems
    .map(({ id, task, completed }) => {
      if (completed) {
        return `
        <li class="is-completed">
        <input type="checkbox" id="${id}" >
        <label for="${id}">${task}</label>
        <button data-id="${id}">Delete</button>
        </li>
        `;
      }

      return `
  <li>
  <input type="checkbox" id="${id}">
  <label for="${id}">${task}</label>
  <button data-id="${id}">Delete</button>

  </li>
  `;
    })
    .join('');

  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', ({ target }) => {
      // Iterate over `todos` and keep going until the `id` of a todo item matches with the `id` that is coming from the input we just checked
      const foundTodo = todos.find(({ id }) => id === Number(target.id));

      // Inverse the boolean
      foundTodo.completed = !foundTodo.completed;

      renderTodos(todos);
    });
  });

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {
      todos = todos.filter(({ id }) => id !== Number(event.target.dataset.id));

      renderTodos(todos);
    });
  });

  todosCounter.innerText = `${ul.querySelectorAll('.is-completed').length} / ${
    todos.length
  }`;
}

// Business Logic
renderTodos(todos);

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const id = Date.now();

  todos.push({
    task: event.target.elements[0].value,
    completed: false,
    id,
  });

  renderTodos(todos);
});
