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
        if(prompt("Do you want to play another ?").toLowerCase() !== "no") {
            count = 0;
            numTarget = getRandomIntInclusive(minGuess, maxGuess);
            nameInput = prompt("Enter your name");
            guessOnce(nameInput);
        } else {
            console.log("thanks.");
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
            if(names.hasOwnProperty(nameInput)) {
                if(names[nameInput] > count) {
                    alert("previous was " + names[nameInput] + " and you beat your guesses by " + count);
                }
            } else {
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