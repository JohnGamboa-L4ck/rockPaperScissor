//rules
//players can play the game with 3 choices of weapon each round: rock, paper, and scissor
//rock beats scissor, scissor beats paper, paper beats rock, and picking the same weapon will result in a tie
//first player who reach the score of 5 will win the game

const weaponChoices = ['rock', 'paper', 'scissor'];
const computerPlay = () => weaponChoices[Math.floor(Math.random() * 3)];
const humanPlay = () => { 
    weaponInput = prompt('rock, paper, scissor! Pick your weapon!');
    if(weaponInput !== null){
        weaponSimplified = weaponInput.toLowerCase();
    }else {
        weaponSimplified = '';
    }
    return weaponSimplified;
};

const playRound = function(playerSelection, computerSelection){
    let roundWinner = 'What weapon is that? *sadface*';

    if(playerSelection == 'rock' && computerSelection == 'rock'){
        roundWinner = "It's a tie!";
    }
    if(playerSelection == 'rock' && computerSelection == 'paper'){
        roundWinner = 'You lose this round.';
    }
    if(playerSelection == 'rock' && computerSelection == 'scissor'){
        roundWinner = 'You win this round!';
    }
    if(playerSelection == 'paper' && computerSelection == 'paper'){
        roundWinner = "It's a tie!";
    }
    if(playerSelection == 'paper' && computerSelection == 'scissor'){
        roundWinner = 'You lose this round.';
    }
    if(playerSelection == 'paper' && computerSelection == 'rock'){
        roundWinner = 'You win this round!';
    }
    if(playerSelection == 'scissor' && computerSelection == 'scissor'){
        roundWinner = "It's a tie!";
    }
    if(playerSelection == 'scissor' && computerSelection == 'rock'){
        roundWinner = "You lose this round.";
    }
    if(playerSelection == 'scissor' && computerSelection == 'paper'){
        roundWinner = 'You win this round!';
    }
    if(playerSelection == null){
        roundWinner = 'Sadly, it seems like you lost your will to fight.';
    }
    console.log('you played: ',playerSelection);
    console.log('computer played: ',computerSelection);
    return roundWinner;
}

const game = function(){

    let round = 0;
    let playerScore = 0;
    let computerScore = 0;

    while(round <= 4){
        const playerSelection = humanPlay();
        const computerSelection = computerPlay();

        round++;
        console.log('Round: ', round);
        thisRound = playRound(playerSelection, computerSelection);
        console.log(thisRound);

        //checks who win the round
        if(thisRound == 'You win this round!'){
            playerScore++;
        }
        if(thisRound == 'You lose this round.'){
            computerScore++;
        }

        console.log(`Your score: ${playerScore}, Computer score: ${computerScore}`);
    }

    let matchResult;
    //checks who win the match
    if(playerScore > computerScore){
        matchResult = ('You win the game!');
    }
    if(playerScore < computerScore){
        matchResult = ('You lose the game.');
    }
    if(playerScore == computerScore){
        matchResult = ('The game ended with a draw!');
    }
    console.log(matchResult);
}

document.querySelector('#start').addEventListener('click', event => {
    console.clear();
    game();
  })