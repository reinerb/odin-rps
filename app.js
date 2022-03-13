const choices = ["rock", "paper", "scissors"];

// Capitalizes the first letter of given string
function capitalize(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}

// Selects a random RPS choice for the computer
function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

// Plays a single RPS round
function playRound(playerChoice, computerChoice) {
  pc = playerChoice.toLowerCase();
  cc = computerChoice.toLowerCase();

  if (pc === cc) {
    return `It's a tie!`;
  } else if (
    (pc === "rock" && cc === "scissors") ||
    (pc === "paper" && cc === "rock") ||
    (pc === "scissors" && cc === "paper")
  ) {
    return `You win! ${capitalize(pc)} beats ${cc}.`;
  } else {
    return `You lose! ${capitalize(cc)} beats ${pc}.`;
  }
}

const playerChoice = "rock";

for (let i = 0; i < 5; i++) {
  console.log(playRound(playerChoice, computerPlay()));
}
