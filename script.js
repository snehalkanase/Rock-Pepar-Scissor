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
let btnclick = document.getElementById('btnclick');
let cheering = document.getElementById('cheering');
let sad = document.getElementById('sad');
let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click',  () => handleClick("Rock"));
paper.addEventListener('click', () => handleClick("Paper"));
scissor.addEventListener('click', () => handleClick("Scissor"));



restart.addEventListener('click', function restart() {
    location.reload();
 });

function handleClick(playerSelection) {
    btnclick.play();
    playerChoice.innerHTML = `Player: ${playerSelection}`; 
    const computerSelection = ComputerChoice();
    compChoice.innerHTML = `Computer: ${computerSelection}`;
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

        return "Draw the round!"
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
    pScore.textContent = `${playerScore}`;
    cScore.innerHTML = `${computerScore}`;
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
            final.style.color = "red"
            sad.play();
            return "Draw! Better luck next time."
        } else if (playerScore > computerScore) {
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;

            computerScore = 0;
            playerScore = 0;
            final.style.color = "Green"
            cheering.play();
            return " yeahh!! You win the match."
        } else if (playerScore < computerScore) {
            rock.disabled = true;
            paper.disabled = true;
            scissor.disabled = true;

            computerScore = 0;
            playerScore = 0;
            final.style.color = "red"
            sad.play();
            return "Computer win the match! try again.."
        }

    }
}
