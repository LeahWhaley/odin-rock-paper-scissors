function playGame() {
    
    function getComputerChoice() {
        // SET randomIdx to random value from 0 to 2
        let randomIdx = Math.floor(Math.random() * 3);
        // RETURN value at randomIdx in choices
        return choices[randomIdx];
    }
    
    function getHumanChoice() {
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

    // SET choices to ["rock", "paper", "scissors"]
    let choices = ["rock", "paper", "scissors"];
    // SET humanScore to 0
    let humanScore = 0;
    // SET computerScore to 0
    let computerScore = 0;
    // FOR each round in game (5 total)
    for (let i = 0; i < 5; i++) {
       // SET computerChoice to getComputerChoice()
       let computerChoice = getComputerChoice();
       // SET humanChoice to getHumanChoice()
        let humanChoice = getHumanChoice();
       // CALL playRound with humanChoice, computerChoice
        playRound(humanChoice, computerChoice);
    // END FOR
    }

    // IF humanScore beats computerScore THEN
    if (humanScore > computerScore) {
       // PRINT human wins
        console.log(`Congratulations! You win! The score was ${humanScore} to ${computerScore}`);
    // ELSE IF computerScore beats humanScore THEN
    } else if (computerScore > humanScore) {
       // PRINT computer wins
        console.log(`Sorry! You lose! The score was ${computerScore} to ${humanScore}`);
    // ELSE
    } else {
       // PRINT no one wins
        console.log(`It was a tie! You both had ${humanScore} points!`);
    // END IF
    }
}