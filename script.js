
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
/*function getHumanChoice(){
    choice=prompt('Enter your choice (Rock, Paper or Scissors)').toLowerCase();
    while (choice!='rock' && choice!='paper' && choice!='scissors' ){
        choice=prompt('Invalid input:Enter Rock, Paper or Scissors').toLowerCase();
    }
    return choice;
}*/

/*function playGame(){
    
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
}*/
function playRound(humanChoice,computerChoice){
    if (humanScore==5 || computerScore==5){
        reset();
    }
    if (humanChoice!=computerChoice)
        if (humanChoice=='rock'){
            if(computerChoice=='paper'){
                computerScore++;
            }
            else{
                humanScore++;
            }
        }
        else if(humanChoice=='paper'){
            if (computerChoice=='rock'){
                humanScore++;
            }
            else{
                computerScore++;
            }
        }
        else{
            if (computerChoice=='rock'){
                computerScore++;
            }
            else {
                humanScore++;}
        }
    setValues(humanChoice,computerChoice);
    if (humanScore==5 || computerScore==5){
        setWinner();
    }
}
function reset(){
    humanScore=0;
    computerScore=0;
    setValues('','');
    winner.textContent='First to 5 wins...';
}
function setWinner(){
    if (humanScore==5){
        winner.textContent='Player wins!'
    }else{
        winner.textContent='Computer wins D:'
    }
}
function setValues(humanChoice,computerChoice){
    human_Choice.textContent='Your choice is:'+humanChoice;
    computer_Choice.textContent="The computer's choice is:"+computerChoice;
    human_Points.textContent='Player='+humanScore;
    computer_Points.textContent="Computer="+computerScore;
}   
let humanScore=0;
let computerScore=0;
const rock=document.querySelector("#rock");
const paper=document.querySelector('#paper');
const scissors=document.querySelector('#scissors');
const human_Choice=document.querySelector('#human-choice');
const computer_Choice=document.querySelector('#computer-choice');
const human_Points=document.querySelector('#human-points');
const computer_Points=document.querySelector('#computer-points');
const winner=document.querySelector('#winner');
const resetter=document.querySelector('#resetter')

resetter.addEventListener('click',reset);
rock.addEventListener('click',()=>{
    playRound('rock',getComputerChoice())});
paper.addEventListener('click',()=>{
    playRound('paper',getComputerChoice())});
scissors.addEventListener('click',()=>{
    playRound('scissors',getComputerChoice())});
