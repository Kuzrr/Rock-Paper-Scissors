console.log("Hello player!")

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

console.log(getComputerChoice());

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

console.log(getPlayerChoice());