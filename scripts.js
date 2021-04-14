document.body.appendChild(document.createElement('ul'));

const ul = document.querySelector('ul');

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  // TODO: Wrap that in an `<li></li>`
  // TODO: Append that to the `<ul></ul>`
  const newToDo = `<li>${event.target.elements[0].value}</li>`;

  // innerHTML - just assign a string that has HTML inside of it
  ul.innerHTML = newToDo;
});
