/*Instructions:
1. Create a new JavaScript file named taskCalendar.js.
2. In the file, perform the following:

o Create a program that prompts the user to enter a day of the week (e.g., "Monday", "Tuesday").
o Use a switch statement to map each day to a specific task. Include a default case for any
unexpected inputs.
o Log the task for that day to the console.

Example Output:
Enter a day of the week: Monday
Your task for Monday is: Finish your assignments.
*/

let day = prompt("Type a day in a week:");
switch(day){
    case "Monday":
        console.log ("Processing..... Your task for Monday is: Finish your Assignments")
        break;
    case "Tuesday": 
        console.log ("Processing..... Your task for Tuesday is: Finish your Assignments");
        break;
    case "Wednesday": 
        console.log ("Processing..... Your task for Wednesday is: Finish your Assignments");
        break;
    case "Thursday": 
        console.log ("Processing..... Your task for Thursday is: Finish your Assignmentsy");
        break;
    case "Friday": 
        console.log ("Processing..... Your task for Friday is: Finish your Assignmentsy");
        break; 
    default: 
        console.log ("Processing..... No task for Satuday and Sunday!");
        break;

}