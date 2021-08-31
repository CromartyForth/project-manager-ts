"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
function sendCompletionEmail(completable) {
    if (!completable.completed) {
        console.error(`Please, complete '${completable.title}' before sending email.`);
        return;
    }
    console.log(`Sending email about '${completable.title}'`);
}
let bugFix = new task_1.Task(1, 'Weirdo flying bug');
sendCompletionEmail(bugFix);
bugFix.completed = true;
sendCompletionEmail(bugFix);
console.log(bugFix);
let tasks = [
    new task_1.Task(1, "Buy milk"),
    new task_1.Task(2, "Buy cheese"),
    new task_1.Task(3, "Pay bills"),
    new task_1.Task(4, "Clean the house"),
];
for (let i = 0; i < tasks.length; i++) {
    let task = tasks[i];
    console.log(task.title);
}
for (let task of tasks) {
    console.log(task.title);
}
