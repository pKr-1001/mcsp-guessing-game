console.log('app.js started');

const minGuess = 1;
const maxGuess = 10;
// crete a random number called "target"
const numTarget = getRandomIntInclusive(minGuess, maxGuess);

let count = 0;
let nameInput = prompt("Enter your name")
let arr = [];

while (true) {
    const result = guessOnce(nameInput);
    alert(result);
    count++;
    
    if( result === "correct")
    {
        console.log("Correct! It only took you " + count + " gusses!");
        console.log("That's Correct " + nameInput + "! Your previous guesses were " + arr.join(','));

        break;
    }
//     if(count === 2) {
//         break;
//     }

}
// guessOnce();

function guessOnce(nameInput) {

        // use prompt to get user input
        
        let input = prompt("Guess a number bewteen " + minGuess + " and " + maxGuess);
        console.log("The user gussed: " + input);
        // compare user guess to target
        let inputNum = parseInt(input); // convert from string to integer
        console.log("input as number " + inputNum);
        // inform user if guess is >, <, or = to target
        if(inputNum < numTarget) {
             arr.push(input);
            return "Sorry " + nameInput + ", Guess Higher"
        } else if (inputNum > numTarget) {
             arr.push(input);
            return "Sorry " + nameInput + ", Guess Lower"
        } else {
            // they are equal
            return "correct"
            
        }
}

console.log("The number was " + numTarget);

function getRandomIntInclusive(min, max) {
//    const min = Math.ceil(min);
//    const max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}