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
    console.log(`CPU: ${computerSelection}`);
    console.log(`You: ${playerSelection}`);

    let won = `You won! ${playerSelection} beats ${computerSelection}!`;
    let lost = `You lost! ${computerSelection} beats ${playerSelection}!`;

    if (
        (playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) { 
            return lost;
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            return won;
    } else if (playerSelection === computerSelection) {
        return "Draw, try again.";
    } else {
        return "Please enter either 'Rock', 'Paper', or 'Scissors'.";
    }
}

console.log(playRound(playerChoice(), computerPlay()));