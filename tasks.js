// File Name    : tasks.js
// Purpose      : The purpose of this file is to store all logic for the tasks section of the web application. 

// Selectors
let taskInput = document.getElementById("taskInput");
let listOfTasks = document.getElementById("tasks");  

// Initiate TaskList array.
let taskList = []; 

// Name         : isInputFilled
// Description  : This function is used to check if a user has inputted text inside a text input.
// Parameters   : Void.
// Return Value : Bool True     :   If user has entered text.
//                Bool False    :   If user has NOT entered text. 
export function isTaskEmpty() 
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

// Name         : createTask
// Description  :  
// Parameters   :  
// Return Value : 
function createTask(task, index)  
{
      // Generate a new "li" element.
        const newTask = document.createElement("li"); 

        // Create a span for the task data & add the task contents.
        const taskData = document.createElement("span"); 
        taskData.textContent = task;    

        // Create the delete button for the task & add text.
        const deleteBtn = document.createElement("button"); 
        deleteBtn.textContent = "Delete"; 

        // Add the textData and the deleteBtn to the LI. 
        newTask.appendChild(taskData);
        newTask.appendChild(deleteBtn); 

        // Add the newTask to the listOfTasks UL.
        listOfTasks.appendChild(newTask); 

        // Added an Event Listener for each dynamically created delete button. 
        deleteBtn.addEventListener("click", () => {
            // Remove the task. 
            taskList.splice(index, 1);    

            // Update the taskList.
            updateTaskList(taskList);  
        }); 
}

// Name         : updateTaskList
// Description  : This function is used to update the Task List UI. 
// Parameters   : taskList[]    :   This is an array of task lists. 
// Return Value : Void.
function updateTaskList(tasks) 
{
    // Clear the currently displayed tasks. 
    listOfTasks.innerHTML = "";  

    // Loop through each task & update the taskList UI.
    tasks.forEach((task, index) => 
    {
        // Create all elements and add apply to UI.
        createTask(task, index); 
    }); 
}; 


// Name         : addTask
// Description  : This function is used to add a task to the taskList[] & update the UI. 
// Parameters   : string taskEntered    :   This is the task data that the user input into the text field. 
// Return Value : Void. 
export function addTask(taskEntered)
{
    // Add the task to the taskList[].
    taskList.push(taskEntered); 

    // Update the Task List UI. 
    updateTaskList(taskList);  

    // Clear the task input field.
    taskInput.value = "";  
}