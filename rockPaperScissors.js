

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




console.log(computerSelection);