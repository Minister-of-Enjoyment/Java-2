const startButton = document.getElementById("start");

let h2prompt = document.getElementById("prompt");

startButton.addEventListener("click", function () {
  let promptValue = prompt("enter any value").toLocaleLowerCase();

  if (isNaN(promptValue) && promptValue.length > 0) {
    if (promptValue === "true") {
      h2prompt.textContent = `You entered "${promptValue}" : This is a boolean data type`;
    } else if (promptValue === "false") {
      h2prompt.textContent = `You entered "${promptValue}" : This is a boolean data type`;
    } else if (promptValue == null) {
      h2prompt.textContent = "Oops! You did not enter any value.";
    } else {
      h2prompt.textContent = `You entered "${promptValue}" : This is a String data type.`;
    }
  } else {
    h2prompt.textContent = `You entered "${promptValue}" : This is a Number data type.`;
  }
});
