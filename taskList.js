export default class TaskList 
{
    #taskList = [];

    // Constructor
    TaskList() 
    {
        this.#taskList = [];
    };

    // Getters/Setters
    get listOfTasks() 
    { 
        return structuredClone(this.#taskList); 
    }; 

    // Methods

    // Name         : AddTask
    // Description  : The purpose of this method is to add user input into the listOfTasks[]. 
    // Parameters   : String task   :   This is the task the user entered.
    // Return Value : listOfTask[]. 
    AddTask(taskData) 
    {
        // Add the taskEntered to the listOfTasks[].
        this.#taskList.push(taskData);
    }; 

    // Name         : removeTask
    // Description  : The purpose of this method is to remove a task from the listOfTasks[].  
    // Parameters   : String task   :   This is the task the user entered.
    // Return Value : listOfTask[]. 
    removeTask(taskIndex)
    {
        console.log(`Task "${this.#taskList[taskIndex]}" removed from task list.`); 
         // Remove the task from the taskList. 
         this.#taskList.splice(taskIndex, 1); // Remove 1 task from the taskIndex. 
    }
}