function startGame() {
  let messagesElement = document.getElementById("messages");
  let playerName: string | undefined = getInputValue("playername");

  logPlayer(playerName);
  postScore(100, playerName);
  // messagesElement!.innerText = "Welcome to multimath. Start..";
}
document.getElementById("startGame")!.addEventListener("click", startGame);

function logPlayer(name: string = "Amar"): void {
  console.log(`New game for ${name}!`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  if (inputElement.value === "") {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = "Mori"): void {
  const scoreElement: HTMLElement | null = document.getElementById(
    "postedScores"
  );
  scoreElement!.innerText = `${score} - ${playerName}`;
}
