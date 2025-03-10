/*
If Else If Activity:
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