console.log('app.js started');

const minGuess = 1;
const maxGuess = 10;
// crete a random number called "target"
let numTarget = getRandomIntInclusive(minGuess, maxGuess);

let count = 0;
let names = {};
let nameInput = prompt("Enter your name")
let arr = []; // records of previous answer

    function playAgain () {
        if(prompt("Do you want to play another ? yes or no").toLowerCase() !== "no") {
            count = 0;
            // if they want to play again, asking their name again.
            numTarget = getRandomIntInclusive(minGuess, maxGuess);
            // if someone else want to play.
            nameInput = prompt("Enter your name");
            guessOnce(nameInput);
        } else {
            alert("thanks.");
            names[nameInput] = count;
            playersRecord(nameInput, count);
    }
}

    function playersRecord (nameInput, count) {
        console.log("existing names: ", names);
        }

    function guessOnce(nameInput) {
        let inputNum;
        // use prompt to get user input
        do {
            count++;
            let input = prompt("Guess a number bewteen " + minGuess + " and " + maxGuess);
            inputNum = parseInt(input); // convert from string to integer
            if(inputNum < numTarget) {
                arr.push(input);
               alert("Sorry " + nameInput + ", Guess Higher");
           } else if (inputNum > numTarget) {
                arr.push(input);
               alert("Sorry " + nameInput + ", Guess Lower");

        } 
    } while(inputNum !== numTarget)
            alert("Corect");
            // if their name is on the object, check if they beat their previous score.
            if(names.hasOwnProperty(nameInput)) {
                if(names[nameInput] > count) {
                    alert("previous was " + names[nameInput] + " and you beat your guesses by " + count);
                } else {
                    alert("That's correct " + nameInput + "! You did better in your last game by " + (name[nameInput]-count))
                    names[nameInput] = count;
                }
            } else {
                //record name and score.
                    alert("That's correct " + nameInput + "! It only took you " + count);
                    names[nameInput] = count;
            }
            playAgain(nameInput);
    }




console.log("The number was " + numTarget);

function getRandomIntInclusive(min, max) {
//    const min = Math.ceil(min);
//    const max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

guessOnce(nameInput);