const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
const players = [
  {
    name: "",
    Symbol: "X",
  },
  {
    name: "",
    Symbol: "O",
  },
];
//  players[editedPlayer - 1].name = enteredPlayername--this is the code logic we used and implement inconfig.js

const playerConfigOverElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");

const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");

const editPlayer1ButtonElement = document.getElementById("edit-player-1-btn");
const editPlayer2ButtonElement = document.getElementById("edit-player-2-btn");

const cancelConfigElement = document.getElementById("Cancel-config-button");
const startNewBtnElement = document.getElementById("start-game-btn");
const gameAreaElement = document.querySelector("#active-game");
const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement = document.getElementById("game-over");

editPlayer1ButtonElement.addEventListener("click", openPlayerConfig);
editPlayer2ButtonElement.addEventListener("click", openPlayerConfig);

cancelConfigElement.addEventListener("click", closePlyerConfig);
backDropElement.addEventListener("click", closePlyerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewBtnElement.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   // console.log(gameFieldElement);
//   gameFieldElement.addEventListener("click", selectGameField);
// }

// or
gameBoardElement.addEventListener("click", selectGameField);
