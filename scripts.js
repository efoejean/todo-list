document.body.appendChild(document.createElement('ul'));

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  // TODO: Take the text from the input
  // TODO: Wrap that in an `<li></li>`
  // TODO: Append that to the `<ul></ul>`
  console.log(event.target.elements[0].value);
});
