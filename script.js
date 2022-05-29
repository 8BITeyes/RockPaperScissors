/* Create function that returns 'Rock', 'Paper', or 'Scissors' randomly from console */
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
/* Create function that takes user input and declares if game is won */
function playRound(playerSelection, computerSelection) {
    const won = `You won! ${playerSelection} beats ${computerSelection}!`;
    const lost = `You lost! ${computerSelection} beats ${playerSelection}!`;
    
    if (
        (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock')) { 
            return(lost);
    } else if (
        (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') ||
        (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') ||
        (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper')) {
            return(won);
    } else (playerSelection === computerSelection); {
    return "Draw! Try again!";
    }
}

const computerSelection = computerPlay();
console.log(computerSelection);
const playerSelection = "paper";
console.log(playRound(playerSelection, computerSelection));
/* Create function game(). Call */
/* Declare playerSelection and computerSelection, make case insensitive */