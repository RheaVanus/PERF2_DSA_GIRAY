/*
If Else If Activity
Instructions:
    1. Create a new JavaScript file named gradeAssignment.js.
    2. In the file, perform the following:
        o Create a program that prompts the user to input their score.
        o Use else if statements to assign grades based on the following criteria:
            ▪ 90 and above: Excellent
            ▪ 80 to 89: Good
            ▪ 70 to 79: Fair
            ▪ Below 70: Needs Improvement
            o Log the corresponding grade to the console.

Example Output:
Enter your score: 85
Your grade is: Good.
*/

//The grade of student is collected using prompt() before proceeding to evaluate the grade.
let stud_grade = prompt("Please input your score");

if (stud_grade >= 90){ //Checks if grade is greater than or less than 90
    console.log("Excellent")
}else if (stud_grade >= 80){//Checks if grade is greater than or equal 80
    console.log("Good")
}else if (stud_grade >= 70){//Checks if grade is greater than or equal to 70
    console.log("Fair")
}else {// Checks if the grade is less than to 70
    console.log("Needs Improvement")
}