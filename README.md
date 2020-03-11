# guessWhat
#Game will begin with two stick figures on a tight-rope.

## rules
 2 players

 generate a word at random and store it in a variable randWord
 display the length of  randWord to the user


 correct_guesses is equal to 0
 incorrect_guesses is equal to 6 - Head , Body, leftArm, rightArm, leftLeg, rightLeg

 prompt the first user to guess a letter

 If the letter guessed is correct, make letter visible on display.
 Increment correct_guesses by 1
 grey-out letter on guess space
 The same player guesses again.

 If the letter guessed is incorrect, subtract 1 from incorrect_guesses
 remove a bodypart from user character.

 Prompt secondPlayer to guess a letter.
 if the guess is correct, make letter visible on display.
 grey-out letter on guess space
 Prompt user to guess again.
 if the guess is incorrect increment incorrect_guesses by 1 
 remove a bodypart from the user character
 if the incorrect_guesses is 0, tell the user 
 they lost and exit the program
 if correct_guesses is equal to the length of the word, tell the user they won

# wireframes
![alt text](https://github.com/dev-Jbostick/guessWhat/blob/master/assets/wireframe.svg "Guess What Wireframe version 1")
# packagelibraries (if I use any)

## timeline
Wednesday - mock-up wireframes + pseudocode + Proposal
Thursday - create functions 
Friday -
Saturday -
Sunday - 
Monday -
Tuesday -
# store random words in an array