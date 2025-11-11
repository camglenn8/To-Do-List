export default class TaskList 
{
    #listOfTasks = [];

    // Constructor
    TaskList() 
    {
        this.#listOfTasks = [];
    };

    // Getters/Setters
    get listOfTasks() 
    { 
        return structuredClone(this.#listOfTasks); 
    }; 

    // Methods

    // Name         : AddTask
    // Description  : The purpose of this method is to add user input into the listOfTasks[]. 
    // Parameters   : String task   :   This is the task the user entered.
    // Return Value : listOfTask[]. 
    AddTask(taskData) 
    {
        // Add the taskEntered to the listOfTasks[].
        this.#listOfTasks.push(taskData);
    }; 
}