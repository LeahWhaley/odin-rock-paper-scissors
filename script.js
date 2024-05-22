function getComputerChoice() {
    // this is only here to test computer choice, in final version this is moved to playGame()
    let choices = ["rock", "paper", "scissors"];
    // SET randomIdx to random value from 0 to 2
    let randomIdx = Math.floor(Math.random() * 3);
    // RETURN value at randomIdx in choices
    return choices[randomIdx];
}

function getHumanChoice() {
     // this is only here to test computer choice, in final version this is moved to playGame()
     let choices = ["rock", "paper", "scissors"];
    // Prompt user for choice and SET choice to user input
    let choice = prompt("Rock, paper, or scissors?");
    // COMPUTE lowercase of choice
    choice = choice.toLowerCase().trim();
    // IF choice matches one of choices THEN
    if (choice === choices[0] || choice === choices[1] || choice === choices[2]) {
       // RETURN choice
        return choice;
    // ELSE
    } else {
       // PRINT error message
        console.log("That was not a valid choice!");
    // END IF
    }
}

// Temporarily put score variables in global scope before coding playGame()
let humanScore = 0;
let computerScore = 0;
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(humanChoice, computerChoice) {
    // IF humanChoice beats computerChoice THEN
    if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
       // INCREMENT humanScore
        humanScore++;
       // PRINT human win announcement
        humanChoiceCapitalized = capitalize(humanChoice);
        console.log(`You win! ${humanChoiceCapitalized} beats ${computerChoice}!`);
    // ELSE IF computerChoice beats humanChoice THEN
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
       // INCREMENT computerScore
        computerScore++;
       // PRINT computer win announcement
        computerChoiceCapitalized = capitalize(computerChoice);
        console.log(`You lose! ${computerChoiceCapitalized} beats ${humanChoice}!`);
    // ELSE
    } else {
       // PRINT tie announcement
        console.log(`You tied! You both picked ${humanChoice}!`);
    }  
    // END IF
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function playGame() {
    // SET choices to ["rock", "paper", "scissors"]

    // SET humanScore to 0

    // SET computerScore to 0

    // FOR each round in game (5 total)
       
       // SET computerChoice to getComputerChoice()
       
       // SET humanChoice to getHumanChoice()

       // CALL playRound with humanChoice, computerChoice

    // END FOR

    // IF humanScore beats computerScore THEN

       // PRINT human wins

    // ELSE IF computerScore beats humanScore THEN

       // PRINT computer wins

    // ELSE
       
       // PRINT no one wins

    // END IF
}