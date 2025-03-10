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

for (let i = 1; i <= 10; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}