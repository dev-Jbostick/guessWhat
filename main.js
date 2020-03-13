// console.log("This is it!");
//Define Variables
// This array element lists the options that players will have to choose from.
const letterPool = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let secretWord; //This will represent the word being guessed
// const blanks;


//generate a secret word using api call storing in secretWord variable
let promise = $.ajax({
    url: 'https://random-word-api.herokuapp.com/word?number=1',
  });
 
  promise.then((data) => {
    secretWord = data;
    console.log(data);//returns word generated from API REMOVE LATER
    console.log(secretWord);
    document.getElementById("secretWordBox").innerHTML = secretWord;
  })
  .catch((e) => console.error(e));
//   document.getElementById("secretWordBox").innerHTML = secretWord;
   
// create # of blank spaces = to secret word

//display blank spaces
//check to see if letter guessed is present in secret word




//This function will create buttons for each letter in the letter pool.
for (i = 0; i < letterPool.length; i++) {
    console.log(letterPool[i]);
    const guessLetters = document.createElement("BUTTON");
    guessLetters.innerHTML = letterPool[i];
    document.getElementById('letters').append(guessLetters);
}




//this function hides the instructions, the tagline and the start button when a user click on Start.
function removeElement() {
    document.getElementById("tagLine").style.display = "none";
    document.getElementById("instructions").style.display = "none";
    document.getElementById("startButton").style.display = "none";
  }
