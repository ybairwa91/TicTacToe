function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;

  playerConfigOverElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlyerConfig() {
  playerConfigOverElement.style.display = "none";
  backDropElement.style.display = "none";
  // formControlElement.classList.remove("error");
  formElement.firstElementChild.classList.remove("error");
  errorOutputElement.textContent = "";
  formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("username").trim();
  console.log(enteredPlayername);

  if (!enteredPlayername) {
    errorOutputElement.textContent = "Please Enter a valid name!";
    event.target.firstElementChild.classList.add("error");
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  console.log(updatedPlayerDataElement);

  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  // if (editedPlayer === 1) {
  //   players[0].name = enteredPlayername;
  // } else {
  //   players[1].name = enteredPlayername;
  // }
  //or
  players[editedPlayer - 1].name = enteredPlayername;
  closePlyerConfig();
}
