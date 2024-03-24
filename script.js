const DeleteButton = document.getElementById("button");
const studentContainer = document.getElementById("resourceSection");
const studentCard = studentContainer.querySelectorAll(".resource");
let studentObjectArray = [...studentCard];

console.log(studentObjectArray);
DeleteButton.addEventListener("click", function () {
  setTimeout(function () {
    let index = Number(
      prompt(
        `Enter the Index of the Student you want to delete from 0 to ${
          studentObjectArray.length - 1
        }:`
      )
    );
    if (!isNaN(index) && index >= 0 && index <= studentObjectArray.length) {
      studentObjectArray.splice(index, 1);
      studentContainer.removeChild(studentContainer.children[index]);
    } else {
      alert("Check the number you entered and try again");
    }
  }, 500);
});
