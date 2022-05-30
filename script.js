/* Create function that returns 'Rock', 'Paper', or 'Scissors' randomly from console */
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
/* function that evaluates user input and returns it */
function playerChoice() {
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    return playerSelection.toLowerCase();
}
/* Create function that takes user input and declares if game is won */
function playRound(playerSelection, computerSelection) {
    const won = `You won! ${playerSelection} beats ${computerSelection}!`;
    const lost = `You lost! ${computerSelection} beats ${playerSelection}!`;
    
    if (
        (playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) { 
            return(lost);
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
            return(won);
    } else (playerSelection === computerSelection); {
    return "Draw! Try again!";
    }
}

const computerSelection = computerPlay();
const playerSelection = playerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));