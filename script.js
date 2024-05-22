function getComputerChoice() {
    // SET randomIdx to random value from 0 to 2

    // RETURN value at randomIdx in choices

}

function getHumanChoice() {
    // Prompt user for choice

    // SET choice to user input

    // COMPUTE lowercase of choice

    // IF choice matches one of choices THEN

       // RETURN choice

    // ELSE

       // PRINT error message

    // END IF

}

function playRound() {
    // IF humanChoice beats computerChoice THEN

       // INCREMENT humanScore

       // PRINT human win announcement

    // ELSE IF computerChoice beats humanChoice THEN

       // INCREMENT computerScore

       // PRINT computer win announcement

    // END IF
}

function playGame() {
    // SET choices to ["rock", "paper", "scissors"]

    // SET humanScore to 0

    // SET computerScore to 0

    // FOR each round in game (5 total)
       
       // SET computerChoice to getComputerChoice()
       
       // SET humanChoice to getHumanChoice()

       // CALL playRound with computerChoice, humanChoice

    // END FOR

    // IF humanScore beats computerScore THEN

       // PRINT human wins

    // ELSE IF computerScore beats humanScore THEN

       // PRINT computer wins

    // ELSE
       
       // PRINT no one wins

    // END IF
}