import TaskList from "./taskList.js";

// Selectors
let addTaskBtn = document.getElementById("addTaskBtn"); 
let taskInput = document.getElementById("taskInput");
let errorMsg = document.getElementById("taskErrorMsg"); 
let listOfTasks = document.getElementById("tasks");  

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


// Name         : deleteTask
// Description  : This callback function is tied to the delete button event handler. It will remove the specific task from the task list + update 
//                the task list afterwards.  
// Parameters   : string task   :   This is the tasks data. 
// Return Value : Void.  
function deleteTask(task)
{
    // Call the taskList object's method to remove the task from the array of tasks. 
    taskList.removeTask(task); 
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
    tasks.forEach((task, index) => {
        // Generate a new "li" element.
        const newTask = document.createElement("li"); 

        // Create a span for the task data & add the task contents.
        const taskData = document.createElement("span"); 
        taskData.textContent = task;    

        // Create the delete button for the task & add text.
        const deleteBtn = document.createElement("button"); 
        deleteBtn.textContent = "Delete"; 

        // Added an Event Listener for each dynamically created delete button. 
        deleteBtn.addEventListener("click", () => {
            // Remove the task. 
            taskList.removeTask(index);    

            // Update the task list.
            updateTaskList(taskList.listOfTasks);   
        }); 

        // Add the textData and the deleteBtn to the LI. 
        newTask.appendChild(taskData);
        newTask.appendChild(deleteBtn); 

        // Add the newTask to the listOfTasks UL.
        listOfTasks.appendChild(newTask); 
    });
};

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
    taskList.AddTask(taskEntered);

    // Update the Task List UI. 
    updateTaskList(taskList.listOfTasks);  

    // Clear the task input field.
    taskInput.value = "";  
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

// Event listener for clicking the Remove Task button. 
