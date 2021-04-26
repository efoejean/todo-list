// Variable Declarations
const ul = document.body.appendChild(document.createElement('ul'));

const todos = [
  {
    userId: 1,
    id: 1,
    task: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    task: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    task: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    task: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    task: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    task: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    task: 'illo expedita consequatur quia in',
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    task: 'quo adipisci enim quam ut ab',
    completed: true,
  },
];

// Function Declarations
function renderTodos(todoItems) {
  // TODO: Turn a bunch of todos li
  ul.innerHTML = todoItems
    .map(
      ({ id, task }) => `
  <li>
  <input type="checkbox" id="${id}">
  <label for="${id}">${task}</label>
  </li>
  `,
    )
    .join('');
}

renderTodos(todos);

// Business Logic
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
