const rounds = document.querySelector("#selectScore");
//header for scorekeep player 1 vs player 2
let scoreKeep = document.querySelector("#updateScore");


let playerOneBTN = document.querySelector("#playerOnePlus");
let playerTwoBTN = document.querySelector("#playerTwoPlus");
const resetBTN = document.querySelector("#reset");
let selectScore = document.querySelector("#selectScore")
let selectScoreToggle = "";


playerOneBTN.addEventListener('click', function() {updateScore(1)});
playerOneBTN.addEventListener('click', victoryCondition);
playerTwoBTN.addEventListener('click', function() {updateScore(2)});
playerTwoBTN.addEventListener('click', victoryCondition);
resetBTN.addEventListener('click', reset);
selectScore.addEventListener('change', changeGameScore);

// // function changeScore(){
// //     selectScore = selectScore.value;  
// // };

// document.addEventListener('input', function (event) {
//     if(event.target.id === 'selectScore') {
//         selectScore = selectScore.value;
//         return;
//     }
// })

function changeGameScore(){
    // if(event.target.id === 'selectScore') {
    //     selectScore = selectScore.value;
    // }
    selectScoreToggle = selectScore.value
    
}


let playerOneScore = 0;
let playerTwoScore = 0;
scoreKeep.innerHTML = `${playerOneScore} to ${playerTwoScore}`;

function updateScore(x) {
    if(x === 2) {
        scoreKeep.innerHTML = `${playerOneScore} to ${playerTwoScore = playerTwoScore + 1}`;
    } else if(x === 1) {
        scoreKeep.innerHTML = `${playerOneScore = playerOneScore + 1} to ${playerTwoScore = playerTwoScore}`;
    }
}

function reset(){
    playerOneScore = 0;
    playerTwoScore = 0;
    scoreKeep.innerHTML = `${playerOneScore} to ${playerTwoScore}`;
    playerOneBTN.disabled = false;
    playerTwoBTN.disabled = false;
}

function victoryCondition() {
    if((playerOneScore == selectScoreToggle) || (playerTwoScore == selectScoreToggle)) {
        winningPlayer();
    }
}

function winningPlayer(){
    if(playerOneScore > playerTwoScore) {
        scoreKeep.innerHTML = `${playerOneScore} to ${playerTwoScore}, Player one has won the Game!`;
        disable();
    } else if(playerTwoScore > playerOneScore) {
        scoreKeep.innerHTML = `${playerOneScore} to ${playerTwoScore}, Player two has won the Game!`;
        disable();
    }
}

function disable(){
    playerOneBTN.disabled = true;
    playerTwoBTN.disabled = true;
}