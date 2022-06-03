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
            console.log(lost);
            return 1;
    } else if (
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
            console.log(won);
            return 2;
    } else if (playerSelection === computerSelection) {
        console.log("Draw, try again.");
    } else {
        console.log("Please enter either 'Rock', 'Paper', or 'Scissors'.");
    }
}
// game() calls scoreKeep (playRound) 5 times and keeps score. Find way to incorporate string.
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let scoreKeep = playRound(playerChoice(), computerPlay());
        if (scoreKeep == 1) {
            computerScore = computerScore + 1;
        } else if (scoreKeep == 2) {
            playerScore = playerScore + 1;
        }
        console.log(`The score is now Player: ${playerScore} CPU: ${computerScore}`);
    }
    return playerScore;
}
console.log(game());