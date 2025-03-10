/*Switch Statement
Instructions:
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
let day = prompt("Type a day in a week:"); // Asks the user to input a day of the week.

switch(day){ // Start a switch statement to check the value of "day"
    case "Monday": // If the day is Monday then this will be executed
        console.log ("Processing..... Your task for Monday is: Finish your Assignments"); // Log the task for Monday
        break; // Exit the switch statement
    
    case "Tuesday": // If the day is Tuesday then this will be executed
        console.log ("Processing..... Your task for Tuesday is: Finish your Assignments"); // Log the task for Tuesday
        break; 
    
    case "Wednesday": // If the day is Wednesday then this will be executed
        console.log ("Processing..... Your task for Wednesday is: Finish your Assignments"); // Log the task for Wednesday
        break; 
    
    case "Thursday": // If the day is Thursday then this will be executed
        console.log ("Processing..... Your task for Thursday is: Finish your Assignmentsy"); // Log the task for Thursday (typo: "Assignmentsy" should be "Assignments")
        break; // Exit the switch statement
    
    case "Friday": // If the day is Friday then this will be executed
        console.log ("Processing..... Your task for Friday is: Finish your Assignmentsy"); // Log the task for Friday (typo: "Assignmentsy" should be "Assignments")
        break; 
    default: // If the input does not match any of the previous cases then this will be executed
        console.log ("Processing..... No task for Satuday and Sunday!"); // Log a message for weekends (typo: "Satuday" should be "Saturday")
        break; 
}
