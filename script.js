console.log('Hello world')

function getComputerChoice(){
    num=Math.random();
    if (num<=0.33){
        return 'rock';
    }
    else if (num <=0.66){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}
function getHumanChoice(){
    choice=prompt('Enter your choice (Rock, Paper or Scissors)').toLowerCase();
    while (choice!='rock' && choice!='paper' && choice!='scissors' ){
        choice=prompt('Invalid input:Enter Rock, Paper or Scissors').toLowerCase();
    }
    return choice;
}

function playGame(){
    function playRound(humanChoice,computerChoice){
        if (humanChoice=='rock'){
            if (computerChoice=='rock'){
                console.log('Tied round!')
            }
            else if(computerChoice=='paper'){
                computerScore++;
                console.log('Computer wins the round D:')
            }
            else{
                humanScore++;
                console.log('Human wins the round :D')
            }
        }
        else if(humanChoice=='paper'){
            if (computerChoice=='rock'){
                humanScore++;
                console.log('Human wins the round :D')
            }
            else if(computerChoice=='paper'){
                console.log('Tied round!')
            }
            else{
                computerScore++;
                console.log('Computer wins the round D:')
            }
        }
        else{
            if (computerChoice=='rock'){
                computerScore++;
                console.log('Computer wins the round D:')
            }
            else if(computerChoice=='paper'){
                humanScore++;
                console.log('Human wins the round :D')
            }
            else{
                console.log('Tied round!')
            }
        }
    }
    let humanScore=0;
    let computerScore=0;
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    if (humanScore>computerScore){
        console.log('Human wins the game!')
    }
    else if(humanScore==computerScore){
        console.log('Tied game!')
    }
    else{
        console.log('Computer wins the game!')
    }
}
