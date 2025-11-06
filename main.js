// Selectors
let addTaskBtn = document.getElementById("addTaskBtn")
let taskInput = document.getElementById("textInput");
let taskList = document.getElementById("taskList");
let errorMsg = document.getElementById("taskErrorMsg");


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


// Name         : clearErrorPrompts
// Description  : This function is used to remove any error prompts
// Parameters   : Void
// Return Value : Void
function clearErrorPrompts() {
    // Clears the empty task input field prompt. 
    errorMsg.textContent = "";
}

// Event Listener
addTaskBtn.addEventListener("click", function () {

    // Clear any error prompts.
    clearErrorPrompts();

    // Check to see if anything has been entered into text field. 
    if (isInputFilled() == false) {
        // Prompt the user to enter a task.
        errorMsg.textContent = "Please enter a task."
        return;
    }

});
