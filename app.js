let numGuess = Math.round(Math.random() * 100);

let noGuess = [];

document.querySelector("#guess").onclick = function() {
    const num = document.querySelector("#num").value;
    noGuess.push(num);

    if(num > numGuess) {
        document.querySelector("#level").innerHTML = "Your guess is too high."
        document.querySelector("#noGuesses").innerHTML = "No. Of Guesses: " + (noGuess.length);
        document.querySelector("#guessedNum").innerHTML = "Guessed Numbers are: " + noGuess;
    } else if (num < numGuess) {
        document.querySelector("#level").innerHTML = "Your guess is too low."
        document.querySelector("#noGuesses").innerHTML = "No. Of Guesses: " + (noGuess.length);
        document.querySelector("#guessedNum").innerHTML = "Guessed Numbers are: " + noGuess;
    } else {
        document.querySelector("#level").innerHTML = "Yippie You Win!!.";
        document.querySelector("#noGuesses").innerHTML = "The number was: " + numGuess;
        document.querySelector("#guessedNum").innerHTML = "You guessed it in " + noGuess.length + " guesses";
    }

}

