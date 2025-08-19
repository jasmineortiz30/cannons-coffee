let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  const name = dataObject.name;

  let message = `Welcome, ${name}! You are logged in!`;
  console.log("Final Message:", message);

  let messageContainer = document.body;
  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  messageContainer.appendChild(messageParagraph);

  form.reset();
}
