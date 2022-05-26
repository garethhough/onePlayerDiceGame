let rollButton = document.getElementById("rollButton");

let numberRolled = document.getElementById("numberRolled");

let score = document.getElementById("score");

let playerOneScore = 0;



// Click roll button and recieve a number between 1 and 6
rollButton.addEventListener("click", function () {
    rolledNum = Math.floor((Math.random() * 6) + 1);
    numberRolled.innerHTML = rolledNum;
    scoreFunction(rolledNum);
});

// Keeps track of score
function scoreFunction(num) {
    if (num != 1) {
        playerOneScore += num;
        score.innerHTML = playerOneScore;
// If players score is greater than 20, you win
        if (playerOneScore > 20) {
            alert("You win!");
            newGame();
        } else {
            console.log("roll again");
        }
// If you role a one, you lose
    } else {
        alert("You roled a 1, You lose!");
        newGame();
    }
}

// Clears stats
function newGame() {
    score.innerHTML = null;
    numberRolled.innerHTML = null;
    playerOneScore = 0;
}