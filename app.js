const choices = ["rock", "paper", "scissors"];
const resultsDisplay = document.querySelector("#results");
const gameOverDisplay = document.querySelector("#game-over");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

let playerScore = 0;
let computerScore = 0;

// Capitalizes the first letter of given string
function capitalize(s) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}

// Selects a random RPS choice for the computer
function computerPlay() {
  return choices[Math.floor(Math.random() * 3)];
}

let reset = false;

// Plays a single RPS round
function playRound(playerChoice) {
  pc = playerChoice.toLowerCase();
  cc = computerPlay().toLowerCase();

  if (reset) {
    playerScore = 0;
    computerScore = 0;
    gameOverDisplay.textContent = "";
    reset = false;
  }

  if (pc === cc) {
    resultsDisplay.textContent = `It's a tie!`;
  } else if (
    (pc === "rock" && cc === "scissors") ||
    (pc === "paper" && cc === "rock") ||
    (pc === "scissors" && cc === "paper")
  ) {
    resultsDisplay.textContent = `You win! ${capitalize(pc)} beats ${cc}.`;
    playerScore += 1;
  } else {
    resultsDisplay.textContent = `You lose! ${capitalize(cc)} beats ${pc}.`;
    computerScore += 1;
  }

  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;

  if (playerScore >= 5) {
    reset = true;
    gameOverDisplay.textContent = "Game over! You win!";
  }

  if (computerScore >= 5) {
    reset = true;
    gameOverDisplay.textContent = "Game over! You lose...";
  }
}

// // Plays a full game of RPS with the given number of rounds
// function game(rounds) {
//   let choice;
//   for (let i = 0; i < rounds; i++) {
//     choice = prompt("Choose rock, paper, or scissors");
//     if (choice === null) {
//       break;
//     }
//     console.log(playRound(choice, computerPlay()));
//   }
// }

// // Starts a game with 5 rounds
// game(5);
