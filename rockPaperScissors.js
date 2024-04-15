let playerScore = 0;
let computerScore = 0;
let resultText = document.getElementById('result');

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function getPlayerSelection() {
    return prompt("Choose wisely (rock, paper, or scissors):");
}

function playRound(playerSelection) {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[getComputerChoice()];

    if (
        (playerSelection === "rock" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "rock")
    ) {
        window.alert("Computer wins!");
        computerScore++;
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors")
    ) {
        window.alert("Player wins!");
        playerScore++;
    } else {
        window.alert("It's a draw!");
    }
}

function playGame() {
    for (let roundCount = 0; roundCount < 5; roundCount++) {
        let playerSelection = getPlayerSelection();
        playRound(playerSelection);
    }
    
    if (playerScore > computerScore) {
        resultText.textContent = "Player wins the game!";
    } else if (playerScore < computerScore) {
        resultText.textContent = "Computer wins the game!";
    } else {
        resultText.textContent = "It's a draw!";
    }
}

playGame();

console.log("Player's score:", playerScore);
console.log("Computer's score:", computerScore);
