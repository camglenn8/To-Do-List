// Selectors
let addTaskBtn = document.getElementById("addTaskBtn")
let taskInput = document.getElementById("textInput");
let taskList = document.getElementById("taskList");


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
        // Prompt user to enter text.
        alert("ENTER TEXT");

        return false;
    }

    return true;
}

// Event Listener
addTaskBtn.addEventListener("click", function () {

    // Check to see if anything has been entered into text field. 
    let result = isInputFilled();


});
