let tasks=["Buy milk","Go to gym","Clean the room"];

function displayTasks(){
    console.log("Tasks on my todo list:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    }
    )
    console.log("\n");
}

function sortTasks(){
    tasks.sort();
    console.log("Tasks sorted alphabetically.");
    displayTasks();
}

function searchtask(task){
    let index=tasks.indexOf(task);
    if(index!=-1){
        console.log(`Task "${task}" found at index ${index}.`);
    }
    else{
        console.log(`Task "${task}" not found.`);
    }
}

displayTasks();
sortTasks();
searchtask("Go to gym");



