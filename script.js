"use strict";

// --------------- Define Variables ---------------
let secretNumber = generateRandom();
console.log(secretNumber);
let score = 20;
let highScore = 0;
const numberElemnt = document.querySelector(".number");

// define functions
const generateRandom = () => {
  return Math.trunc(Math.random() * 20) + 1;
};
const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const setScore = (newScore) => {
  document.querySelector(".score").textContent = newScore;
};

// --------------- Game Logic ---------------
// check button action
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);


  if (!guess) {
    // if input is empty
    displayMessage("‼️ No Number!");
  } else if (guess === secretNumber) {
    // if guess is correct
    displayMessage("🥳 Correct Number!");

    numberElemnt.textContent = secretNumber;
    numberElemnt.style.width = "30rem";

    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else {
    // if guess is wrong
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
      score--;
      setScore(score);
    } else {
        // game over
      displayMessage("😭 You lost!");
      setScore(0);
    }
  }
});

// Again button action (reset the game)
document.querySelector(".again").addEventListener("click", () => {
  secretNumber = generateRandom();
  console.log("sec: ", secretNumber);
  score = 20;

  numberElemnt.style.width = "15rem";
  numberElemnt.textContent = "?";

  displayMessage("Start guessing...");
  setScore(score);

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
});
