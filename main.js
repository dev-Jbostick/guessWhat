//this game was created following SimonJSuh on youtube.

var movies = [
    "TITANIC",
    "STUART LITTLE",
    "BABY BOY",
    "STARWARS" 
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];

function randomWord () {
    answer = movies[Math.floor(Math.random() * movies.length)];
    // alert(answer);
}
function generateButtons (){
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('').map(letter =>
        `
        <button class="btn btn-lg btn-primary m-2" id='` + letter + `' onclick="handleGuess('` + letter + `')">` + letter + `</button> 
        `).join('');
        document.getElementById('keyboard').innerHTML = buttonsHTML;
}
//
function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    // alert(answer);

    if (answer.indexOf(chosenLetter) >= 0){
        guessedWord();
        checkForWin();
    }
    else if(answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes();
        checkForLoss();
    }
}
function updateHangmanPic(){
    document.getElementById
}
//the next two functions will check the 
function checkForWin(){
    if (wordStatus === answer){
        document.getElementById('keyboard').innerHTML = "You Won!";
    }
}
function checkForLoss(){
    if (mistakes === maxWrong){
        document.getElementById('secretMovie').innerHTML = "The answer was " + answer;
        document.getElementById('keyboard').innerHTML = "You lose!";
    }
}
function guessedWord (){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_ ")).join('');
    document.getElementById('secretMovie').innerHTML = wordStatus;
}

function updateMistakes(){
    document.getElementById('mistakes').innerHTML = mistakes;
}
function reset(){
    mistakes = 0;
    guessed = [];


    randomWord();
    guessedWord();
    updateMistakes();
    generateButtons();
}


document.getElementById('maxWrong').innerHTML = maxWrong;
randomWord();
generateButtons();
guessedWord();