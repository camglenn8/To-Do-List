// File Name    : tasks.js
// Purpose      : The purpose of this file is to store all logic for the tasks section of the web application. 

// Selectors
let taskInput = document.getElementById("taskInput");
let listOfTasks = document.getElementById("tasks");  

// Initiate TaskList array.
let taskList = []; 

// Name         : isTaskEmpty
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


// Name         : shuffleTaskList
// Description  : This function is used to determine whether or not a task should be moved up or down in the task list.
// Parameters   : string shuffleType    :   This determines if a task should be moved up or down in the task list.
//                int currentTask       : This is the current index of the task to be moved.
//                taskList[]            : This is the array of all the tasks on the task list.  
// Return Value : Void. 
function shuffleTaskList(shuffleType, currentTask, taskList)
{
    // Check to see if you should be moving the task up or down in the task list.  
    if (shuffleType == "moveUp")
    {
        // Store the higher task.
        let higherTask = taskList[currentTask - 1];  

        // Replace the higher task with the current task.
        taskList[currentTask - 1] = taskList[currentTask]; 
        
        // Add the higher task in the current tasks previous position.
        taskList[currentTask] = higherTask; 
    }
    else
    {
        // Store the previous task. 
        let lowerTask = taskList[currentTask + 1]; 

        // Replace the previous task with the current task.
        taskList[currentTask + 1] = taskList[currentTask]; 

        // Add the lower task in the current tasks previous position.
        taskList[currentTask] = lowerTask;   
    }
}


// Name         : createTask
// Description  : This function is used to create new task elements and display them on the taskList. 
// Parameters   :  string task  :   This is the task data entered by the user.
//              :  int index    :   This is the index of the specific task that was clicked (for the event handlers). 
// Return Value : Void. 
function createTask(task, index)  
{
        // Create a span for the task data & add the task contents.
        const taskData = document.createElement("span"); 
        taskData.textContent = task;    

        // Create the delete button for the task & add text.
        const deleteBtn = document.createElement("button"); 
        deleteBtn.textContent = "Delete"; 

        // Create the "moveUpTask" button. 
        const moveUpTaskBtn = document.createElement("button"); 
        moveUpTaskBtn.textContent = "Up" 

        // Create the "moveDownTask" button.
        const moveDownTaskBtn = document.createElement("button"); 
        moveDownTaskBtn.textContent = "Down"; 

        // Generate a new "li" element & add all other elements to it.
        const newTask = document.createElement("li"); 
        newTask.appendChild(taskData);
        newTask.appendChild(moveUpTaskBtn); 
        newTask.appendChild(moveDownTaskBtn); 
        newTask.appendChild(deleteBtn); 

        // Append the newTask LI element to the listOfTasks UL element.
        listOfTasks.appendChild(newTask); 

        // Added an Event Listener for each dynamically created delete button. 
        deleteBtn.addEventListener("click", () => {
            // Remove the task. 
            taskList.splice(index, 1);    

            // Update the taskList.
            updateTaskList(taskList);  
        }); 

        // Add an Event Handler for each dynamically created moveUpTask button. 
        moveUpTaskBtn.addEventListener("click", () =>{
            // Check to see if the task can be moved up. 
            if (index > 0)
            {
                // Move the task up in the list.
                shuffleTaskList("moveUp", index, taskList); 
            }
            // Update the taskList.
            updateTaskList(taskList);  
        }); 

        // Add an Event Handler for each dynamically created DOWN button.
        moveDownTaskBtn.addEventListener("click", () => {
            // Check to see if the task can be moved down.
            let lastTasksIndex = taskList.length - 1; 

            if (index < lastTasksIndex)
            {
                // Move the task down in the list. 
                shuffleTaskList("moveDown", index, taskList); 

                // Update the taskList.
                updateTaskList(taskList); 
            }
        });
}

// Name         : updateTaskList
// Description  : This function is used to update the Task List UI. 
// Parameters   : taskList[]    :   This is an array of task lists. 
// Return Value : Void.
function updateTaskList(taskList) 
{
    // Clear the currently displayed tasks on the taskList.  
    listOfTasks.innerHTML = "";  

    // Loop through each task & update the taskList UI.
    taskList.forEach((task, index) => 
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