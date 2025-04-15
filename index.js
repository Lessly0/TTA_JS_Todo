let tasks=[
    ["Work",["Complete project", "Attend meeting"]],
    ["Personal",["Grocery shopping", "Gym"]]
]

//function to display tasks in all categories

function displayTasks(){
    tasks.forEach((category)=>{
        console.log(`\t ${category[0]}:`);
        category[1].forEach((task,index)=>{
            console.log(`\t\t ${index+1}. ${task}`);
        })
    })
}

//function to add a task to a category

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

//function to remove a task from a category

function removetask(category,index){
    for (let i=0;i<tasks.length;i++){
        if (tasks[i][0]===category){
            if (index>=0 && index<tasks[i][1].length){
                let removedTask=tasks[i][1][index];
                for(let j=index;j<tasks[i][1].length;j++){
                    tasks[i][1][j]=tasks[i][1][j+1];
                }
                tasks[i][1].length--;
                console.log(`\n nodeTask "${removedTask}" removed from \n "${category}" category.\n`);
                return;
            }
        } 
    }
    console.log(`Category "${category}" not found.`);
}

//function to sort tasks in a category alphabetically

function sortTasks(category){
    for (let i=0;i<tasks.length;i++){
        if (tasks[i][0]===category){
            tasks[i][1].sort();
            console.log(`\n Tasks in "${category}" category sorted alphabetically.`);
            return;
        }
    }
    console.log(`Category "${category}" not found.`);
}

//function to search through tasks in a category

function searchTasks(category,task){
    for (let i=0;i<tasks.length;i++){
        if (tasks[i][0]===category){
            let index=tasks[i][1].indexOf(task);
            if (index !== -1){
                console.log(`\n Task "${task}" found in "${category}" category at index ${index}. \n`);
                return;
            }
            else{
                console.log(`\n Task "${task}" was not found in "${category}" category. \n`)
                return;
            }
        }  
    }
    console.log(`Category "${category}" not found.`);
}

addtask("Work","Finish report");
displayTasks();

console.log("\n Tasks before adding new task: \n");
displayTasks();

removetask("Work",1);
displayTasks();

sortTasks("Work");
displayTasks();

searchTasks("Work","Attend meeting");