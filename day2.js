let tasks=["Buy milk","Go to gym","Read a book"];

function displayTasks(){
    console.log("Tasks on my todo list:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    }
    )
    console.log("\n");

}

function addTask(task){
    tasks[tasks.length]=task;
    // tasks.push(task);
    console.log(`Successfully added: \n |${task}| to the list \n`);

}

function addstart(task){
    for(let i=tasks.length;i>0;i--){
        tasks[i]=tasks[i-1];
    }
    tasks[0]=task;
    console.log(`Successfully added: \n |${task}| to the start of the list \n`);
}

function removeTask(index){
    if(index>=0 && index<tasks.length){
        let removedTask=tasks[index];
        for(let i=index;i<tasks.length-1;i++){
            tasks[i]=tasks[i+1];
        }
        tasks.length--;
        console.log(`Successfully removed task: \n |${removedTask}| from the list \n`);
    }
    else{
        console.log("Invalid index. Task not found.");
    }
}

displayTasks();

addTask("Go to the store");
displayTasks();

addstart("Buy bread");
displayTasks();

removeTask(2);
displayTasks();