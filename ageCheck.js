/*
Instructions:
    1. Create a new JavaScript file named ageCheck.js.
    2. In the file, perform the following:
        o Create a program that prompts the user to enter their age.
        o Use an if-else structure to determine if the user is:
            ▪ A child (under 13)
            ▪ A teenager (13–19)
            ▪ An adult (20+)
            o Log the appropriate message to the console.

Example Output:
Enter your age: 14
You are a teenager.
*/

let age = parseInt(prompt("What is your age")); // Asks the user for their age and convert the input to an integer

if (age < 13) { // Checks if the age is less than 13 before printing "You are a child!"
    console.log("You are a child!"); 
} else if (age >= 13 && age <= 19) { // Checks if the age is between 13 and 19 before printing "You are a teenager"
    console.log("You are a teenager"); 
} else { // If age is greater than 19, for example 20, then it will print "You're an adult" 
    console.log("You're an adult"); 
}
