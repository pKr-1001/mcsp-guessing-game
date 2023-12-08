console.log('app.js started');

const minGuess = 1;
const maxGuess = 10;
// crete a random number called "target"
const numTarget = getRandomIntInclusive(minGuess, maxGuess);

let count = 0;
while (true) {
    const result = guessOnce();
    alert(result);
    count++;
    if( result === "correct")
    {
        break;
    }
//     if(count === 2) {
//         break;
//     }

}
// guessOnce();

function guessOnce() {

        // use prompt to get user input
        let input = prompt("Guess a number bewteen " + minGuess + " and " + maxGuess);
        console.log("The user gussed: " + input);
        // compare user guess to target
        let inputNum = parseInt(input); // convert from string to integer
        console.log("input as number " + inputNum);
        // inform user if guess is >, <, or = to target
        if(inputNum < numTarget) {
            return "lower"

        } else if (inputNum > numTarget) {
            return "greater"
        } else {
            // they are equal
            return "correct";
            
        }
}

console.log("The number was " + numTarget);

function getRandomIntInclusive(min, max) {
//    const min = Math.ceil(min);
//    const max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}