let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  const name = dataObject.name;
  const email = dataObject.email;
  const phone = dataObject.phone;
  const comments = dataObject.comments;
  const flavor = dataObject.flavor;
  const interest = dataObject.interest;

  let message = `Thank you ${name}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${flavor} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`;

  console.log("Message:", message);

  let messageContainer = document.body;
  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  messageContainer.appendChild(messageParagraph);
  form.reset();
}
