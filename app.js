console.log('app.js started');

const minGuess = 1;
const maxGuess = 10;
// crete a random number called "target"
const numTarget = getRandomIntInclusive(minGuess, maxGuess);

let count = 0;
let nameInput = prompt("Enter your name")
let arr = [];

    function playAgain () {
        if(prompt("Do you want to play another ?").toLowerCase() !== "no") {
            guessOnce(nameInput);
        } else {
            console.log("thanks.");
        
        }
        return;
    }
    // function playAgain() {
    //     const playResponse = prompt("Do you want to play another round? (yes/no)").toLowerCase();
    //     if (playResponse === "yes") {
    //         guessOnce(nameInput);
    //     } else {
    //         console.log("Thanks for playing, " + nameInput + "!");
    //     }
    // }


// while (true) {
//     const result = guessOnce(nameInput);
//     alert(result);
//     count++;
    
//     if( result === "correct")
//     {
       
//         console.log("Correct! It only took you " + count + " guesses!");
//         console.log("That's Correct " + nameInput + "! Your previous guesses were " + arr.join(','));
//         let playAgain = prompt("Do you want to play another round ?");
//         if(playAgain.toLowerCase() === 'true') {
//             guessOnce();
//         } 
//         alert("Thanks for playing");
        
//     }

// }

function guessOnce(nameInput) {
        let inputNum;
        // use prompt to get user input
        do {
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
            playAgain();
    }
//         console.log("The user gussed: " + input);
//         // compare user guess to target
//         console.log("input as number " + inputNum);
//         // inform user if guess is >, <, or = to target
//         while(inputNum !== numTarget) {
//             if(inputNum < numTarget) {
//                 arr.push(input);
//                alert("Sorry " + nameInput + ", Guess Higher");
//            } else if (inputNum > numTarget) {
//                 arr.push(input);
//                alert("Sorry " + nameInput + ", Guess Lower");
//            } else {
//                // they are equal
//                // return "correct"
//                alert("Correct");
//                playAgain();
//                break;
//            }
//         } 
// }

// function guessOnce(nameInput) {
//     let input = prompt("Guess a number between " + minGuess + " and " + maxGuess);
//     console.log("The user guessed: " + input);
//     let inputNum = parseInt(input);

//     while (inputNum !== numTarget) {
//         if (inputNum < numTarget) {
//             arr.push(input);
//             console.log("Sorry " + nameInput + ", Guess Higher");
//         } else if (inputNum > numTarget) {
//             arr.push(input);
//             console.log("Sorry " + nameInput + ", Guess Lower");
//         }
//         input = prompt("Guess again: ");
//         inputNum = parseInt(input);
//     }

//     if (inputNum === numTarget) {
//         arr.push(input);
//         console.log("Correct! It only took you " + (arr.length) + " guesses!");
//         console.log("That's Correct, " + nameInput + "! Your previous guesses were: " + arr.join(', '));
//         playAgain();
//     }
// }




console.log("The number was " + numTarget);

function getRandomIntInclusive(min, max) {
//    const min = Math.ceil(min);
//    const max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

guessOnce(nameInput);