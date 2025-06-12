"use strict";

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

// define variables
let secretNumber = generateRandom();
let score = 20;
let highScore = 0;
const numberElement = document.querySelector(".number");
const guessElement = document.querySelector(".guess");

// --------------- Game Logic ---------------
// check button action
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(guessElement.value);

  if (!guess) {
    // if input is empty
    displayMessage("‼️ No Number!");
  } else if (guess === secretNumber) {
    // if guess is correct
    displayMessage("🥳 Correct Number! Let's go again");

    numberElement.textContent = secretNumber;
    numberElement.style.width = "30rem";
    guessElement.disabled = true; 

    document.querySelector(".check").disabled = true;
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
      console.log(score);
    } else {
      // game over
      displayMessage("😭 You lost!... Try again");
      setScore(0);
      document.querySelector(".check").disabled = true;
      guessElement.disabled = true; 
    }
  }
});

// Again button action (reset the game)
document.querySelector(".again").addEventListener("click", () => {
  secretNumber = generateRandom();
  score = 20;

  numberElement.style.width = "15rem";
  numberElement.textContent = "?";
  guessElement.value = "";
  guessElement.disabled = false;

  displayMessage("Start guessing...");
  setScore(score);

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".check").disabled = false;
});
