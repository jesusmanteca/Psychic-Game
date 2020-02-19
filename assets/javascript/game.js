var arrayChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        var wins = 0;
        var losses = 0
        var guessesLeft = 9
        var computerGuess 
        var lettersGuessedArray = [];
        function generateComputerGuess() {
            computerGuess = arrayChoices[Math.floor(Math.random() * arrayChoices.length)];
        }
        generateComputerGuess()

        // This function is run whenever the user presses a key. Esta funcion 
document.onkeyup = function(event) 
{

// New variables to get the stuff form the id's
    var defaultText = document.getElementById("default-text");
    var userChoice = document.getElementById("user-choice-text");
    var computerChoice = document.getElementById("computer-choice-text");
        var winsText = document.getElementById("wins-text");
        var lossesText = document.getElementById("losses-text");
        var lettersGuessed = document.getElementById("lettersGuessed");
        
                            // ** Here we go! ** \\


// Determines which key was pressed by the user. 
var userGuess = event.key; 

// Randomly chooses an element from the array. This is the computer guess.


                        // ** Conditions are here ** \\
        
            if (userGuess === computerGuess) { 
                wins++
                generateComputerGuess();
                guessesLeft = 9
                lettersGuessedArray = []
                    }
                        else {
                            guessesLeft--
                            lettersGuessedArray.push(userGuess)
                        console.log(guessesLeft)
                    }   
            if (guessesLeft === 0) {
                losses++;
                generateComputerGuess();
                guessesLeft = 9
                lettersGuessedArray = []
            }

                    // ** Type out...** \\

                defaultText.textContent = "";
                userChoice.textContent = "You Chose..." + userGuess;
                winsText.textContent = "Your wins: " + wins;
                lossesText.textContent = "Your losses: " + losses;
                lettersGuessed.textContent = "You've guessed: " + lettersGuessedArray;

            }
        