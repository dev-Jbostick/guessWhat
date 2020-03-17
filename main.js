//this game was created following SimonJSuh on youtube.
//create array of Will Smith movies titles
var movies = [
    "HITCH",
    "MEN IN BLACK",
    "BAD BOYS",
    "I AM LEGEND",
    "INDEPENDENCE DAY",
    "ALI",
    "I ROBOT",
    "SEVEN POUNDS",
    "WILD WILD WEST",
    "FOCUS"
]

let answer = '';
let maxWrong = 6;
let mistakes = 0;
let guessed = [];

//this function generates a random title from the movies array
function randomWord () {
    answer = movies[Math.floor(Math.random() * movies.length)];
    // console.log(answer);
}

//this function takes the alphabet string and splits it into individual letters as well as created button.
function generateButtons (){
    let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('').map(letter =>
        `
        <button class="btn btn-lg btn-primary m-2" id='` + letter + `' onclick="handleGuess('` + letter + `')">` + letter + `</button> 
        `).join('');
        document.getElementById('keyboard').innerHTML = buttonsHTML;
}

//this function removes each letter guessed
//it also disables the clicked letter

function handleGuess(chosenLetter){
    guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
    document.getElementById(chosenLetter).setAttribute('disabled', true);
    // alert(answer);

    if (answer.indexOf(chosenLetter) >= 0){
        guessedWord();
        checkForWin();
        // alert("You win!")
    }
    else if(answer.indexOf(chosenLetter) === -1){
        mistakes++;
        updateMistakes();
        checkForLoss();
        alert("WRONG ANSWER!")
    }
}

//the next function will check the win status by seeing if word status is equal to answer word
function checkForWin(){
    if (wordStatus === answer){
        document.getElementById('keyboard').innerHTML = "You Won!";
    }
}
//the function below will check to see if a player has had mistakes equal to maxwrong causing them to lose.
function checkForLoss(){
    if (mistakes === maxWrong){
        document.getElementById('secretMovie').innerHTML = "The answer was " + answer;
        document.getElementById('keyboard').innerHTML = "You lose!";
    }
}
//this function inserts a _ to represent each character in the movie title
function guessedWord (){
    wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : "_ ")).join('');
    document.getElementById('secretMovie').innerHTML = wordStatus;
}
//this function will update the mistake counter on the DOM
function updateMistakes(){
    document.getElementById('mistakes').innerHTML = mistakes;
}

//this function is for the reset button. it puts everything back to starting status
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