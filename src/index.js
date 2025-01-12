import './style.css';
import {getList} from './taskFeatures/taskCategory';

let form = document.getElementById("taskForm");
let taskList = document.getElementById("taskList");


//task object
function task(taskCat, taskName, taskDesc, taskDate, taskPrio){
    this.taskCat = taskCat;
    this.taskName = taskName;
    this.taskDesc = taskDesc;
    this.taskDate = taskDate;
    this.taskPrio = taskPrio;
}



//takes info from the form
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const taskCat = getList();
    const taskName = document.getElementById("taskName").value;
    const taskDesc = document.getElementById("taskDescription").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskPrio = document.getElementById("priority").value
    // const task

    createTask(taskCat, taskName, taskDesc, taskDate, taskPrio);
    
    form.reset();
});

//task 
function createTask(taskCat, name, desc, date, prio){
    const displayTask = new task(taskCat, name, desc, date, prio)

    createTaskStructure(taskCat, name, desc,date, prio)

    console.log("Create Task Cat: " + taskCat)
    console.log("Create Task Name: " + name);
    console.log("Create Task Description: " + desc);
    console.log("Create Task Date: " + date);
    console.log("Create Task Prio: " + prio);
}
//can probably turn this into function factory
function createTaskStructure(cat, name, desc, date, prio){
    const task = document.createElement("tr");
    
    const taskCat = document.createElement("td");
    taskCat.innerText = cat;
    
    const taskName = document.createElement("td");
    taskName.innerText = name;

    const taskDesc = document.createElement("td");
    taskDesc.innerText = desc;

    const taskDate = document.createElement("td");
    taskDate.innerText = date;

    const taskPrio = document.createElement("td");
    taskPrio.innerText = prio;

    task.appendChild(taskCat);
    task.appendChild(taskName);
    task.appendChild(taskDesc);
    task.appendChild(taskDate);
    task.appendChild(taskPrio);

    taskList.appendChild(task);
}
