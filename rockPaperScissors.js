let playerScore = 0;
let computerScore = 0;

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

   // const button = document.querySelector("button");
//let playerSelection = button.addEventListener("click"); 


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection === "paper"){
        return computerScore++;
    
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return computerScore++;
        
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return computerScore++;
    
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return playerScore++;
    
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return playerScore++;
    
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return playerScore++;
    } else {
        return;
    }


} 
  const playerSelection = "paper";
  console.log(playRound(playerSelection, computerSelection));

console.log(computerSelection);
console.log(playerSelection);
console.log(playerScore);
console.log(computerScore);