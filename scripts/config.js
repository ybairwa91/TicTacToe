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
  const enteredPlayername = formData.get("username").trim();
  console.log(enteredPlayername);

  if (!enteredPlayername) {
    errorOutputElement.textContent = "Please Enter a valid name!";
    event.target.firstElementChild.classlist.add("error");
    return;
  }
}
