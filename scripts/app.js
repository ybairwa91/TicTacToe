const playerConfigOverElement = document.getElementById("config-overlay");
const backDropElement = document.getElementById("backdrop");

const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("config-error");

const editPlayer1ButtonElement = document.getElementById("edit-player-1-btn");
const editPlayer2ButtonElement = document.getElementById("edit-player-2-btn");

const cancelConfigElement = document.getElementById("Cancel-config-button");

editPlayer1ButtonElement.addEventListener("click", openPlayerConfig);
editPlayer2ButtonElement.addEventListener("click", openPlayerConfig);

cancelConfigElement.addEventListener("click", closePlyerConfig);
backDropElement.addEventListener("click", closePlyerConfig);

formElement.addEventListener("submit", savePlayerConfig);
