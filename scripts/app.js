let editedPlayer = 0;

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

const playerConfigOverElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");

const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");
const gameAreaElement = document.querySelector("#active-game");

// const formControlElement = document.querySelector(".form-control");

const editPlayer1ButtonElement = document.getElementById("edit-player-1-btn");
const editPlayer2ButtonElement = document.getElementById("edit-player-2-btn");

const cancelConfigElement = document.getElementById("Cancel-config-button");
const startNewBtnElement = document.getElementById("start-game-btn");

editPlayer1ButtonElement.addEventListener("click", openPlayerConfig);
editPlayer2ButtonElement.addEventListener("click", openPlayerConfig);

cancelConfigElement.addEventListener("click", closePlyerConfig);
backDropElement.addEventListener("click", closePlyerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewBtnElement.addEventListener("click", startNewGame);
