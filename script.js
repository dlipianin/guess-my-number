"use strict";

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;

const checkNumber = function() {
  const guess = Number(document.querySelector(".guess").value);
  if (guess <= 0) {
    displayMessage("No number!")
  } else if (guess === secretNumber) {
    displayMessage("Correct number!")
    displayNumber(secretNumber);
    rightBgColor("#B4CFB0");
    numberBgColor("#94B49F");
    centerMessage("You won! Congrats!")
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess != secretNumber) {
    if (score > 1){
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      scoreNumber(score);
    } else {
      displayMessage("You lost the game!")
      rightBgColor("#FF7171");
      numberBgColor("#EF4B4B");
      scoreNumber(0);
    }
  }
}

const displayMessage = function(message) {
  document.querySelector(".message").textContent = message;
}

const displayNumber = function(number) {
  document.querySelector(".number").textContent = number;
}

const rightBgColor = function(right) {
  document.querySelector("#right").style.backgroundColor = right;
}

const numberBgColor = function(number) {
  document.querySelector(".number").style.backgroundColor = number;
}

const centerMessage = function(center) {
  document.querySelector(".center-header").textContent = center;
}

const scoreNumber = function(score) {
  document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", checkNumber);

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1;
  displayMessage("Start guessing...");
  displayNumber("?");
  scoreNumber(score);
  document.querySelector(".guess").value = "";
  rightBgColor("#FFAD87");
  numberBgColor("#CC7351");
  centerMessage("Remember: you can ALWAYS try again!");
});

document.querySelector(".refresh").addEventListener("click", function () {
  window.location.reload();
});

document.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    checkNumber();
  }
});
