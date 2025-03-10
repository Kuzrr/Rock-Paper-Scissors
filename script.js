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

function getPlayerChoice(){
    let text = `
    Chose a number:
    1. Rock
    2. Paper
    3. Scissors
    `;
    let choice = parseInt(prompt(text));

    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}



function playRound(){
    let playerChoice = getPlayerChoice();
    console.log("player: " + playerChoice)
    let computerChoice = getComputerChoice();
    console.log("computer: " + computerChoice)

    if(playerChoice === computerChoice){
        console.log("Draw! Nobody won")
    }else if(
    (playerChoice == "scissors" && computerChoice == "paper")||
    (playerChoice == "rock" && computerChoice == "scissors")||
    (playerChoice == "paper" && computerChoice == "rock")){

        console.log(`You win! ${playerChoice} beats ${computerChoice}`);
        humanScore++;
    }else{
        console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
        computerScore++;
    }
    return 0;
}

for(let i = 0; i <= 4; i++){
    playRound();
}

console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);

