import {addTask, isTaskEmpty} from "./tasks.js"; 

// Selectors
let addTaskBtn = document.getElementById("addTaskBtn"); 
let taskInput = document.getElementById("taskInput");
let errorMsg = document.getElementById("taskErrorMsg");  

// Event Listener for Clicking the Add Task Button. 
addTaskBtn.addEventListener("click", function () 
{

    // Clears the empty task input field prompt.
    errorMsg.textContent = "";

    // Check to see if anything has been entered into text field. 
    let taskEntered = isTaskEmpty();
    if (taskEntered == "") 
    {
        // Prompt the user to enter a task.
        errorMsg.textContent = "Please enter a task."
        return;
    }

    // Add the task. 
    addTask(taskEntered); 
});

// Event listener for pressing ENTER to add a task. 
taskInput.addEventListener("keydown", function(event)
{
    // When a user click "Enter" - it will direct you to the addTaskBtn click event handler.
    if (event.key === "Enter")
    {
        addTaskBtn.click(); 
    }
});