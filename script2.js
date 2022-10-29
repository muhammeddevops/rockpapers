const choices = ["rock", "paper", "scissors"];
const winners = [];
//const ties = [];

function game() {
    for (let i=1; i <= 5; i++) {
        playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    //console.log(winner);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = prompt('Type rock, paper or scissors. Spelling must be exact.');
    while (input == null) {
        input = prompt('Type rock, paper or scissors. Spelling must be exact.');
    }
    
    input = input.toLowerCase();
    let check = validateInput(input)
    
    while (check == false) {
        input = prompt('Type rock, paper or scissors. Spelling must be exact.');
        
        while (input == null) {
            input = prompt('Type rock, paper or scissors. Spelling must be exact.');
        }
        input = input.toLowerCase()
        check = validateInput(input);
    }
    return input;
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
    return choices.includes(choice)
}

function checkWinner(choiceP, choiceC){
    if (choiceP === choiceC) {
        return "Tie!"
    }   else if (
        (choiceP === "rock" && choiceC === "scissors") ||
        (choiceP === "scissors" && choiceC === "paper") ||
        (choiceP === "paper" && choiceC === "rock")
    ) {
        return "Player"
    } else {
        return "Computer"
    }
         /* choiceP === choiceC 
          ? `Player 1: ${choiceP}, CPU: ${choiceC}. Tie Game!`
          : choiceP === 'rock' && choiceC === 'paper'
          ? `Player 1: ${choiceP}, CPU: ${choiceC}. CPU wins!`
          : choiceP === 'paper' && choiceC === 'scissors'
          ? `Player 1: ${choiceP}, CPU: ${choiceC}. CPU wins!`
          : choiceP === 'scissors' && choiceC === 'rock'
          ? `Player 1: ${choiceP}, CPU: ${choiceC}. CPU wins!`        
          : `Player 1: ${choiceP}, CPU: ${choiceC}. Player 1 wins!`; */
    }

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let compWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie!").length;
    console.log("Results:");
    console.log(`Player wins: ${playerWins}`);
    console.log(`Computer wins: ${compWins}`);
    console.log(`Ties: ${ties}`);
    //console.log(winners);
}

function logRound(playerChoice, getComputerChoice, winner, round) {
    console.log(`Round: ${round}`)
    console.log(`Player chose: ${playerChoice}`);
    console.log(`Computer chose: ${getComputerChoice}`);
    
    if (winner == "Player" || winner == "Computer") {
        console.log(`${winner} won the round.`)
    } else console.log("Tie!");
    console.log("--------------------------------------");
}
game();


//console.log(getchoiceCChoice());

/* let choiceC = 
          choiceCChoice === 1 
            ? 'rock'
            : choiceCChoice === 2
            ? 'paper'
            : 'scissors';

let choiceCChoice = Math.floor((Math.random() * 3) + 1);

function getchoiceCChoice() {
    let choiceCChoice = Math.floor((Math.random() * 3) + 1);
    
    return choiceC;
}

let choiceCSelection = getchoiceCChoice();
let playerSelection = prompt('Enter rock, paper, or scissors to play');

function playRound(playerSelection, choiceCSelection) {

    if (playerSelection) {
        let choiceP = playerSelection.trim().toLowerCase();
     if (
        choiceP === 'rock' ||
        choiceP === 'paper' ||
        choiceP === 'scissors'
    ) {
        let result =
          choiceP === choiceC 
          ? `Player 1: ${choiceP}, CPU: ${choiceC}. Tie Game!`
          : choiceP === 'rock' && choiceC === 'paper'
          ? `Player 1: ${choiceP}, CPU: ${choiceC}. CPU wins!`
          : choiceP === 'paper' && choiceC === 'scissors'
          ? `Player 1: ${choiceP}, CPU: ${choiceC}. CPU wins!`
          : choiceP === 'scissors' && choiceC === 'rock'
          ? `Player 1: ${choiceP}, CPU: ${choiceC}. CPU wins!`        
          : `Player 1: ${choiceP}, CPU: ${choiceC}. Player 1 wins!`;
        
       alert(result);
          
          
    } else {
        alert('Invalid entry');
    }
    }
} 
    


console.log(playRound(playerSelection, choiceCSelection)); */