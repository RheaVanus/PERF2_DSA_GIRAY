/*
In the file, perform the following:
    o Write a program that prompts the user to enter a password.
    o Use a do-while loop to keep asking for the password until it matches the correct one (set a
    hardcoded correct password).
    o Log a success message to the console when the correct password is entered.

Example Output:
Enter your password: wrongPassword
Incorrect, try again.
Enter your password: correctPassword
Access granted.
*/
let password = "P455W0RD_15_mYPh0n3"; // The password that is "Hardcoded"
let pass_user = prompt("Please enter your password"); // Asks the user what is the password

do {
    if (pass_user !== password) { // Check if entered password is incorrect and it's true that its incorrect then it will exeute "Haha Nice try Hacker, Incorrect, Try again" and then ask the user again to type another password.
        console.log("Haha Nice try Hacker, Incorrect, Try again");
        pass_user = prompt("Please enter your password"); 
    }
} while (pass_user !== password); // Repeats until the correct password is entered

console.log("Access Granted, Welcome!"); // This is the message if the password is correct.
