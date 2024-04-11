let playerScore = 0;
let computerScore = 0;
let playerSelection;

function getComputerChoice() {
    return Math.floor(Math.random() * 3)
    
}

let computerSelection = getComputerChoice();

    if (computerSelection === 0) {
        computerSelection = "rock";
    } else if (computerSelection === 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }


    function getPlayerSelection() {
    playerSelection = prompt("Choose wisely...");
    }

    function playRound(playerSelection, computerSelection) {
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
    



  
getPlayerSelection();

console.log(playRound(playerSelection, computerSelection));

console.log(computerSelection);
console.log(playerSelection);
console.log(playerScore);
console.log(computerScore);