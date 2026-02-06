const input = document.getElementById("nameInput");
const button = document.getElementById("greetBtn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  if (input.value === "") {
    message.textContent = "Please enter your name 🙂";
  } else {
    message.textContent = `Hello, ${input.value}! Welcome 🚀`;
  }
});
