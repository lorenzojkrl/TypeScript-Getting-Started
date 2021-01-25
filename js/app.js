"use strict";
function startGame() {
    var messagesElement = document.getElementById("messages");
    var playerName = "Mon";
    logPlayer(playerName);
    messagesElement.innerText = "Welcome to multimath. Start..";
}
document.getElementById("startGame").addEventListener("click", startGame);
function logPlayer(name) {
    console.log("New game for " + name + "!");
}
//# sourceMappingURL=app.js.map