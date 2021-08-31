import {Task} from "./task";
import { Completable } from "./completable";

function sendCompletionEmail(completable: Completable) {

    if(!completable.completed) {
        
        // ignore incompleted entities

        console.error(`Please, complete '${completable.title}' before sending email.`);

        return;
    }

    console.log(`Sending email about '${completable.title}'`);

    // send email code...
    
}

let bugFix = new Task(1, 'Weirdo flying bug');

sendCompletionEmail(bugFix);

bugFix.completed = true;

sendCompletionEmail(bugFix);

console.log(bugFix);


// testing itterators

let tasks:Array<Task> = [

    new Task(1, "Buy milk"),

    new Task(2, "Buy cheese"),

    new Task(3, "Pay bills"),

    new Task(4, "Clean the house"),

]

// 1. referencing the index
for (let i = 0; i < tasks.length; i++) {
    
    let task = tasks[i];

    console.log(task.title);
}

// 2. using for of statement

for (let task of tasks) {

    console.log(task.title);

}
