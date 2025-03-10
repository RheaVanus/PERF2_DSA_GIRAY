/*
In the file, perform the following:
    o Write a program that asks the user to guess a number between 1 and 10.
    o Use a while loop to keep asking until the user guesses the correct number.
    o Log messages to the console indicating whether their guess is too high, too low, or correct.

Example Output:
Guess a number between 1 and 10: 6
Too high!
Guess a number between 1 and 10: 3
Correct!
*/

let rndm_num = parseInt(prompt("Guess a number between 1 and 10")); // Ask the user for a number between 1 to 10 then converts it to an integer before proceeding to the next line.
const rilnum = Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10 

while (rndm_num !== rilnum) { // This is the while lopp and it will keep looping until the user's guess matches the correct number
    if (rndm_num > rilnum) { // Checks the input if it is greater than the correct number.
        console.log("Too High"); // Inform the user their guess is too high
    } else { // If the guess is lower than the correct number
        console.log("Too Low"); // Inform the user their guess is too low
    }

    rndm_num = parseInt(prompt("Guess a number between 1 and 10")); // If the nu,ber didn't match, this will be executed again and again.
}

console.log("Correct!"); // Inform the user they guessed correctly


//Source of the idea in Math.floor: https://www.w3schools.com/js/js_random.asp
