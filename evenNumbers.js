/*
Instructions:
1. Create a new JavaScript file named evenNumbers.js.
2. In the file, perform the following:

o Write a program that prints numbers from 1 to 10 using a for loop.
o Modify the program to print only even numbers between 1 and 10.
o Log the numbers to the console.

Example Output:
2
4
6
8
10
*/

for (let i = 1; i <= 10; i++) { // It starts a loop where i value is 1, while the limit of i is less than or equal to  10, increment or add i by 1 on each iteration
    if (i % 2 == 0) { // Check if i is even or divisible by 2 with no remainder
        console.log(i); // Print the even number to the console
    }
}
