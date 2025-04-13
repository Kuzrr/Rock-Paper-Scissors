let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let number = Math.floor(Math.random() * 3) + 1;
    switch(number){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getPlayerChoice(choice){
    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function playRound(weapon){
    const playerChoiceText = document.querySelector("#playerChoice");
    const computerChoiceText = document.querySelector("#computerChoice");
    const winner = document.querySelector("#resoults");    

    let playerChoice = weapon;
    playerChoiceText.textContent = weapon;

    let computerChoice = getComputerChoice();
    computerChoiceText.textContent = computerChoice;

    if(playerChoice === computerChoice){
        winner.textContent = "Draw! Nobody gets a point";
    }else if(
    (playerChoice == "scissors" && computerChoice == "paper")||
    (playerChoice == "rock" && computerChoice == "scissors")||
    (playerChoice == "paper" && computerChoice == "rock")){

        winner.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        humanScore++;
    }else{
        winner.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }

    
    return 0;
}

const btnRck = document.querySelector("#rock");
const btnPpr = document.querySelector("#paper");
const btnScrs = document.querySelector("#scissors");

btnRck.addEventListener("click", () => playRound("rock") );
btnPpr.addEventListener("click", () => playRound("paper") );
btnScrs.addEventListener("click", () => playRound("scissors") );








