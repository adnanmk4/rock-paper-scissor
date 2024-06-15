
const choices = ['rock', 'paper', 'scissors'];
const playerDisplay = document.getElementById('playerDisplay');
const ComputerDisplay = document.getElementById('ComputerDisplay');
const reasultDisplay = document.getElementById('reasultDisplay');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');

let playerScore  = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const ComputerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";
    if (playerChoice === ComputerChoice) {
        result = "IT'S A TIE"
    } else {
        switch (playerChoice) {
            case "rock":
                result = (ComputerChoice === "scissors") ? "YOU WIN" : "YOU LOSE"

            case "paper":
                result = (ComputerChoice === "rock") ? "YOU WIN" : "YOU LOSE"

            case "scissors":
                result = (ComputerChoice === "paper") ? "YOU WIN" : "YOU LOSE"
        }
    }

    playerDisplay.textContent = `PLAYER ${playerChoice}`;
    ComputerDisplay.textContent = `COMPUTER ${ComputerChoice}`;
    reasultDisplay.textContent = result;

    reasultDisplay.classList.remove("greenText" , "redText")

    switch (result) {
        case "YOU WIN":
            reasultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE":
            reasultDisplay.classList.add("redText")
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }

}