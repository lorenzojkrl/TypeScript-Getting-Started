function startGame() {
  let messagesElement = document.getElementById("messages");
  let playerName: string = "Mon";
  logPlayer(playerName);
  messagesElement!.innerText = "Welcome to multimath. Start..";
}
document.getElementById("startGame")!.addEventListener("click", startGame);

function logPlayer(name: string | "Amar") {
  console.log(`New game for ${name}!`);
}
