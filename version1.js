let tasks=["Buy milk","Go to gym","Read a book"];

console.log("Taks on my todo list:");
console.log("1. "+tasks[0]);
console.log("2. "+tasks[1]);
console.log("3. "+tasks[2]);

tasks.push("Go to the store");
console.log("4. "+tasks[3]);

console.log(tasks);

tasks.pop();
console.log(tasks);

tasks.shift();
console.log(tasks);

tasks.unshift("Go home");
console.log(tasks);

tasks.splice(1,1);
console.log(tasks);

tasks.splice(1,0,"Go to the park");
console.log(tasks);


