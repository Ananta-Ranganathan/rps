function computerPlay() {
    let n = Math.floor(Math.random() * 3);
    if (n == 1) {
        return "rock";
    } else if (n == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
            return 0;
        } else if (computerSelection == "paper") {
            return -1;
        } else {
            return 1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return 1;
        } else if (computerSelection == "paper") {
            return "Tie";
        } else {
            return -1;
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return -1;
        } else if (computerSelection == "paper") {
            return 1;
        } else {
            return -1;
        }
    } else {
        return "Invalid input!"
    }
}

let results = document.querySelector('#results');

const playerLoss = document.createElement('li');
playerLoss.textContent = 'Player loss';

let score = document.querySelector('#score');
let playerScore = 0;
let computerScore = 0;
const gameOver = document.createElement('h1');
gameOver.textContent = 'Game Over!';

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    let res = playRound("rock", computerPlay());
    if (res == -1) {
        computerScore++;
        results.appendChild(playerLoss);
    } else if (res == 0) {
        let tie = document.createElement('li');
        tie.textContent = 'Tie';
        results.appendChild(tie);
    } else {
        playerScore++;
        let playerWin = document.createElement('li');
        playerWin.textContent = 'Player win';
        results.appendChild(playerWin);
    }
    score.textContent = playerScore + " : " + computerScore;
    if (playerScore == 5 || computerScore == 5) {
        results.appendChild(gameOver);
    }
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    let res = playRound("paper", computerPlay());
    if (res == -1) {
        computerScore++;
        results.appendChild(playerLoss);
    } else if (res == 0) {
        let tie = document.createElement('li');
        tie.textContent = 'Tie';
        results.appendChild(tie);
    } else {
        playerScore++;
        let playerWin = document.createElement('li');
        playerWin.textContent = 'Player win';
        results.appendChild(playerWin);
    }
    score.textContent = playerScore + " : " + computerScore;
    if (playerScore == 5 || computerScore == 5) {
        results.appendChild(gameOver);
    }
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    let res = playRound("scissors", computerPlay());
    if (res == -1) {
        computerScore++;
        results.appendChild(playerLoss);
    } else if (res == 0) {
        let tie = document.createElement('li');
        tie.textContent = 'Tie';
        results.appendChild(tie);
    } else {
        playerScore++;
        let playerWin = document.createElement('li');
        playerWin.textContent = 'Player win';
        results.appendChild(playerWin);
    }
    score.textContent = playerScore + " : " + computerScore;
    if (playerScore == 5 || computerScore == 5) {
        results.appendChild(gameOver);
    }
});
