import TaskList from "./taskList.js";

// Selectors
let addTaskBtn = document.getElementById("addTaskBtn")
let taskInput = document.getElementById("textInput");
let errorMsg = document.getElementById("taskErrorMsg");

// Initiate TaskList Object.
let taskList = new TaskList();


// Name         : isInputFilled
// Description  : This function is used to check if a user has inputted text inside a text input.
// Parameters   : Void.
// Return Value : Bool True     :   If user has entered text.
//                Bool False    :   If user has NOT entered text. 
function isInputFilled() {
    // Get the data from the input field.
    let data = taskInput.value;

    // Remove all whitespace from text & check if empty.
    data = data.trim();
    if (data == "") {
        return false;
    }

    return true;
}


// Event Listener
addTaskBtn.addEventListener("click", function () {

    // Clears the empty task input field prompt. 
    errorMsg.textContent = "";

    // Check to see if anything has been entered into text field. 
    if (isInputFilled() == false) {
        // Prompt the user to enter a task.
        errorMsg.textContent = "Please enter a task."
        return;
    }

    // Add the task. 

});
