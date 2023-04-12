const buttonc = document.querySelectorAll('#button');
const rock = document.getElementById("rock");
const pepar = document.getElementById("pepar");
const scissor = document.getElementById("scissor");
const res = document.getElementById("res");
let playerChoice = document.getElementById('playerSelection');
let compChoice = document.getElementById('computerSelection');
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => handleClick("Rock"));
pepar.addEventListener('click', () => handleClick("Pepar"));
scissor.addEventListener('click', () => handleClick("Scissor"));

function handleClick(playerSelection) {
    playerChoice.innerHTML = playerSelection;
    const computerSelection = ComputerChoice();
    compChoice.innerHTML = computerSelection;
    res.innerHTML = playRound(playerSelection, computerSelection)
}
function ComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    // console.log(num);

    switch (num) {
        case 1:
            return "Rock";
        case 2:
            return "Pepar";
        case 3:
            return "Scissor";
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        playerScore++;
        computerScore++;
        return "draw"
    } else if (playerSelection == "Rock" && computerSelection == "Scissor" ||
               playerSelection == "Pepar" && computerSelection == "Rock" ||
               playerSelection == "Scissor" && computerSelection == "Pepar"){

                playerScore++;
                return `You win the round!! ${playerSelection} beats the ${computerSelection} `
    }
    else if (computerSelection == "Rock" && playerSelection == "Scissor" ||
               computerSelection == "Pepar" && playerSelection == "Rock" ||
               computerSelection == "Scissor" && playerSelection == "Pepar"){
         
                computerScore++;
                return `Computer win the Round!! ${computerSelection} beats the ${playerSelection}`
}
}