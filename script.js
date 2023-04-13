const buttonc = document.querySelectorAll('#button');
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const res = document.getElementById("res");
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const final = document.getElementById('final');
const restart = document.getElementById('restart');
let playerChoice = document.getElementById('playerSelection');
let compChoice = document.getElementById('computerSelection');
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', () => handleClick("Rock"));
paper.addEventListener('click', () => handleClick("Paper"));
scissor.addEventListener('click', () => handleClick("Scissor"));

restart.addEventListener('click', function restart() {
    location.reload();
 });

function handleClick(playerSelection) {

    playerChoice.innerHTML = playerSelection;
    const computerSelection = ComputerChoice();
    compChoice.innerHTML = computerSelection;
    res.innerHTML = playRound(playerSelection, computerSelection);
    updateScore();

    if (gameOver()) {
        final.innerHTML = finalMsg()
    }
}
function ComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    // console.log(num);

    switch (num) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissor";
        default:
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // playerScore++;
        // computerScore++;

        return "draw"
    } else if (playerSelection == "Rock" && computerSelection == "Scissor" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissor" && computerSelection == "Paper") {

        playerScore++;
        return `You win the round!! ${playerSelection} beats the ${computerSelection} `
    }
    else if (computerSelection == "Rock" && playerSelection == "Scissor" ||
        computerSelection == "Paper" && playerSelection == "Rock" ||
        computerSelection == "Scissor" && playerSelection == "Paper") {

        computerScore++;
        return `Computer win the Round!! ${computerSelection} beats the ${playerSelection}`
    }

}

function updateScore() {
    pScore.textContent = `Player Score:${playerScore}`;
    cScore.innerHTML = `Computer Score:${computerScore}`;
    console.log(playerScore)
}

function gameOver() {
    return playerScore === 5 || computerScore === 5;
}

function finalMsg() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === computerScore) {
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;

            computerScore = 0;
            playerScore = 0;
            return "draw"
        } else if (playerScore > computerScore) {
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;

            computerScore = 0;
            playerScore = 0;
            return " You win the match"
        } else if (playerScore < computerScore) {
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;

            computerScore = 0;
            playerScore = 0;
            return "Computer win the match"
        }

    }
}
