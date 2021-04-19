document.body.appendChild(document.createElement('ul'));

const ul = document.querySelector('ul');

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();

  const id = Date.now();

  const newToDo = `
    <li>
    <input type="checkbox" id="${id}">
    <label for="${id}">${event.target.elements[0].value}</label>
    </li>
  `;

  // innerHTML - just assign a string that has HTML inside of it
  ul.innerHTML = newToDo;
});
