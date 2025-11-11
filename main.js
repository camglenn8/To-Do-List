import TaskList from "./taskList.js";

// Selectors
let addTaskBtn = document.getElementById("addTaskBtn"); 
let taskInput = document.getElementById("taskInput");
let errorMsg = document.getElementById("taskErrorMsg"); 
let listOfTasks = document.getElementById("taskList"); 

// Initiate TaskList Object.
let taskList = new TaskList();


// Name         : isInputFilled
// Description  : This function is used to check if a user has inputted text inside a text input.
// Parameters   : Void.
// Return Value : Bool True     :   If user has entered text.
//                Bool False    :   If user has NOT entered text. 
function isTaskEmpty() 
{
    // Get the data from the input field.
    let data = taskInput.value;

    // Remove all whitespace from text & check if empty.
    data = data.trim();
    if (data == "") 
    {
        return "";
    }

    return data;
}; 



// Name         : updateTaskList
// Description  : This function is used to update the Task List UI. 
// Parameters   : taskList[]    :   This is an array of task lists. 
// Return Value : Void.
function updateTaskList(taskList) 
{
    // Clear the currently displayed tasks. 
    listOfTasks.innerHTML = ""; 

    // Display all tasks within the taskList[]. 
    for (const task of taskList)
    {
        // Generate a new "li" element & add the task data to it. 
        const newTask = document.createElement("li"); 

        // Assign the tasks value to the List Item Element. 
        newTask.textContent = task; 

        // Access the Unordered List Element & append the LI element.   
        listOfTasks.appendChild(newTask);  
    }
}; 



// Event Listener
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
    taskList.AddTask(taskEntered);

    // Update the Task List UI. 
    updateTaskList(taskList.listOfTasks); 

    // Clear the task input field.
    taskInput.value = "";  
});
