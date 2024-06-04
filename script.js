console.log("Hello!");



function getComputerChoice() {
    // SET randomIdx to random value from 0 to 2
    let randomIdx = Math.floor(Math.random() * 3);
    // RETURN value at randomIdx in choices
    return choices[randomIdx];
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    const results = document.querySelector(".results");
    results.textContent = "";
    updateScore();
}

function updateScore() {
    const score = document.querySelector(".score");
    score.textContent = `Player: ${humanScore}     Computer: ${computerScore}`;
    if (humanScore === 5) {
        alert("Congratualations you win!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry, the computer won. Better luck next time!");
        resetGame();
    }
}

function playRound(humanChoice, computerChoice) {
    // IF humanChoice beats computerChoice THEN
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        // INCREMENT humanScore
        humanScore++;
        // PRINT human win announcement
        humanChoiceCapitalized = capitalize(humanChoice);
        const results = document.querySelector(".results");
        results.textContent = `You win! ${humanChoiceCapitalized} beats ${computerChoice}!`;
        console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoice}!`);
        updateScore();
        // ELSE IF computerChoice beats humanChoice THEN
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        // INCREMENT computerScore
        computerScore++;
        // PRINT computer win announcement
        computerChoiceCapitalized = capitalize(computerChoice);
        const results = document.querySelector(".results");
        results.textContent = `You lose! ${computerChoiceCapitalized} beats ${humanChoice}!`;
        console.log(`You lose! ${computerChoiceCapitalized} beats ${humanChoice}!`);
        updateScore();
        // ELSE
    } else {
        // PRINT tie announcement
        const results = document.querySelector(".results");
        results.textContent = `You tied! You both picked ${humanChoice}!`;
        console.log(`You tied! You both picked ${humanChoice}!`);
    }
    // END IF
}

// SET choices to ["rock", "paper", "scissors"]
let choices = ["rock", "paper", "scissors"];
console.log("loaded");
// SET humanScore to 0
let humanScore = 0;
// SET computerScore to 0
let computerScore = 0;
// SET humanChoice to getHumanChoice()
updateScore();
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})
const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})
const scissorsButton = document.querySelector("#scissors");
scissorsButton.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
})