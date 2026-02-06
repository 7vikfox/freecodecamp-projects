const input = document.getElementById("numInput") as HTMLInputElement;
const button = document.getElementById("checkBtn") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;

button.addEventListener("click", () => {
  const value: number = Number(input.value);

  if (isNaN(value)) {
    result.textContent = "Please enter a valid number.";
  } else if (value % 2 === 0) {
    result.textContent = "The number is EVEN.";
  } else {
    result.textContent = "The number is ODD.";
  }
});
