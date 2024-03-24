const startQuiz = document.getElementById("quizButton");
const conatainer = document.getElementById("displayScoreContainer");

//The function to fire the window prompts

startQuiz.addEventListener("click", function () {
  const username = prompt("Enter your User Name");

  const userId = prompt("Enter your user Id");

  if (!username && !userId) {
    return alert("you did not enter any user name or Id");
  } else {
    alert(`Dear ${username} with ID ${userId} the quiz will begin now...`);
  }

  const questions = [
    "What year was Olusegun Obansanjo born?",
    "What year was Late President Umaru Musa Yar'Adua born?",
    "What year was Dr Goodluck Jonathan born?",
    "What year was Mohammed Burhari born?",
    "what year was recorded as the year of birth of President Bola Ahmed Tinubu?",
  ];

  questions[3];

  let scores = 0;
  for (let i = 0; i < questions.length; i++) {
    let answers = Number(prompt(questions[i]));
    switch (true) {
      case answers === 1937:
        scores += 20;
        break;
      case answers === 1951:
        scores += 20;
        break;
      case answers === 1957:
        scores += 20;
        break;
      case answers === 1942:
        scores += 20;
        break;
      case answers === 1952:
        scores += 20;
        break;
    }
  }
  conatainer.innerHTML = "";
  let user = document.createElement("h3");
  let result = document.createElement("p");

  user.textContent = `Hello ${username} with ID${userId} ✨`;
  result.textContent = `Congratulations 🎉 You scored ${scores}% 0ver 100%`;

  conatainer.append(user, result);
});
