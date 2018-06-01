var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var computerPick = Math.floor(Math.random() * letters.length);
var chosenLetter = letters[computerPick];
var wins = 0;
var losses = 0;
var lettersGuessed =[];
var triesLeft = 25;
console.log (computerPick);
console.log (chosenLetter);

document.addEventListener("keydown", 
    function(event) {
    var keycode = event.keyCode;
    var userGuess = String.fromCharCode(keycode);
    console.log(userGuess);

    if(userGuess === chosenLetter){
        wins++;
        document.getElementById('letter').innerHTML = chosenLetter;
       
    }
    else{
        lettersGuessed.push(userGuess);
        triesLeft--;

    }
    if(triesLeft === 0){
        losses++;
    }

    
   
    

    
    
    document.getElementById('wins').innerHTML = ("Wins - ") + wins;
    document.getElementById('letters guessed').innerHTML = ("Already Guessed -") + lettersGuessed ;
    document.getElementById('tries left').innerHTML = ("Number of guesses remaining -") + triesLeft;
    document.getElementById('losses').innerHTML =("losses - ") + losses;

   console.log(wins);
   console.log(lettersGuessed);
   console.log(triesLeft);
});




