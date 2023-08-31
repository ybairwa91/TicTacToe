function openPlayerConfig() {
  playerConfigOverElement.style.display = "block";
  backDropElement.style.display = "block";
}

function closePlyerConfig() {
  playerConfigOverElement.style.display = "none";
  backDropElement.style.display = "none";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("username");
  console.log(enteredPlayername);
}
