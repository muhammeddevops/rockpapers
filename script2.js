let winners = [];
const choices = ["rock", "paper", "scissors"];
//const ties = [];

function resetGame() {
    winners = [];
    document.querySelector(".player-score").textContent = "Score: 0";
    document.querySelector(".computer-score").textContent = "Score: 0";
    document.querySelector(".ties").textContent = "Ties: 0";
    document.querySelector(".winner").textContent = "";
    document.querySelector(".player-choice").textContent = "";
    document.querySelector(".computer-choice").textContent = "";
    document.querySelector(".reset").style.display = "none";
}


function startGame() {
    let imgs = document.querySelectorAll("img")
    imgs.forEach((img) => 
    img.addEventListener('click', () => {
        if(img.id) {
            playRound(img.id); 
            //this will pass 1 of the 3 choices to the playRound function.
        }
    })
  );
}


function playRound(playerChoice) {
    let wins = countWins();
    if(wins >= 3) return;
    //const playerSelection = playerChoice();
    //method of getting player choice from pop up box is no longer needed
    const computerSelection = getComputerChoice();
    const winner = checkWinner(playerChoice, computerSelection);
    //console.log(winner);
    winners.push(winner);
    //logRound(playerSelection, computerSelection, winner, round);
    tallyWins();
    displayRound(playerChoice, computerSelection, winner)
    wins = countWins();
    if(wins == 3) {
        //display end results
        //change the button to visible
        //change the text to display winner
        displayEnd();
    }
    console.log(winner);
}

function displayEnd() {
  let playerWins = winners.filter((item) => item == "Player").length;
    
  if (playerWins == 3) {
    document.querySelector('.winner').textContent = 
    `You won 3 games, Congrats!`;
  } else {
      document.querySelector('.winner').textContent = 
      `Sorry, the computer won 3 games.`
  }
  document.querySelector('.reset').style.display = 'flex';
}


function displayRound(playerChoice, computerSelection, winner) {
    document.querySelector('.player-choice').textContent = `You Chose: ${
      playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)}`
    document.querySelector('.computer-choice').textContent = 
    `Computer Chose: ${computerSelection.charAt(0).toUpperCase() + 
      computerSelection.slice(1)}`
    document.querySelector('.winner').textContent = 
    `Round winner: ${winner}`;
    
    displayRoundWinner(winner);
}

function displayRoundWinner(winner) {
    if (winner == "Player") {
      document.querySelector(".winner").textContent = "You won the Round!";
    } else if (winner == "Computer") {
      document.querySelector(".winner").textContent =
        "The Computer won the Round";
    } else {
      document.querySelector(".winner").textContent = "The Round was a tie";
    }
  }

function tallyWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let compWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    document.querySelector('.player-score').textContent = `Score: ${playerWins}`;
    document.querySelector('.computer-score').textContent = `Score: ${compWins}`;
    document.querySelector('.ties').textContent = `Ties: ${ties}`;
}

function getComputerChoice() {
    const choice = choices[Math.floor(Math.random() * choices.length)];
    document.querySelector(`.${choice}`).classList.add("active");

    setTimeout(() => {
      document.querySelector(`.${choice}`).classList.remove("active");
    }, 700);
  
    return choice;
}

function countWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let compWins = winners.filter((item) => item == "Computer").length;
    return Math.max(playerWins,compWins);
}

function checkWinner(choice1, choice2) {
        if (
          (choice1 == "rock" && choice2 == "scissors") ||
          (choice1 == "scissors" && choice2 == "paper") ||
          (choice1 == "paper" && choice2 == "rock")
        ) {
          return "Player";
        } else if (choice1 == choice2) {
          return "Tie";
        } else {
          return "Computer";
        }
      }

function logWins() {
    let playerWins = winners.filter((item) => item == "Player").length;
    let compWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie!").length;
}
startGame();