let tasks=[
    ["Work",["Complete project", "Attend meeting"]],
    ["Personal",["Grocery shopping", "Gym"]]
]

//console.log(tasks[0][0]);
//console.log(tasks[1]);

function displayTasks(){
    tasks.forEach((category)=>{
        console.log(`\t ${category[0]}:`);
        category[1].forEach((task,index)=>{
            console.log(`\t\t ${index+1}. ${task}`);
        })
    })
}

function addtask(category,task){
    for (let i=0;i<tasks.length;i++){
        if (tasks[i][0]===category){
            tasks[i][1].push(task);
            console.log(`Task "${task}" added to \n "${category}" category.\n`);
            console.log("\n Adding new task... \n");
            return;
        }
    }
    console.log(`Category "${category}" not found.`);

}
console.log("\n Tasks before adding new task: \n");
displayTasks();

addtask("Work","Finish report");
displayTasks();