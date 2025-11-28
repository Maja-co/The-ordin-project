console.log("Welcome to rock paper scissors")

// Første input
let svar = prompt("Chose 0 for rock, 1 for paper and 2 for scissors (or type 'exit')")

while (svar !== "exit") {
    // Tjek om input er 0, 1 eller 2
    if (svar === "0" || svar === "1" || svar === "2") {
        const humanChoice = getHumanChoice(svar);
        const computerChoice = getComputerChoice();

        console.log("Du valgte: " + humanChoice);
        console.log("Computeren valgte: " + computerChoice);
        
        playRound(computerChoice, humanChoice);
    } else {
        console.log("Ugyldigt input. Skriv venligst 0, 1 eller 2.");
    }

    svar = prompt("Chose 0, 1, 2 again or type 'exit'");
}


function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice(valgte) {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[valgte];
}

function playRound(computerChoice, humanChoice) {
    switch (true) {
        case computerChoice === humanChoice:
            console.log("Draw");
            break;
        case computerChoice === "Rock" && humanChoice === "Scissors":
            console.log("You lose! Rock beats scissors");
            break;
        case computerChoice === "Paper" && humanChoice === "Rock":
            console.log("You lose! Paper beats Rock");
            break;
        case computerChoice === "Scissors" && humanChoice === "Paper":
            console.log("You lose! Scissors beats Paper");
            break;
        default:
            console.log("You Win!");
    }
}
