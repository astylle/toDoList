import form from "../index";
import { getProjectName } from "./newProject";

let projectName = getProjectName;

let taskList = document.getElementById("taskList");
const key = "taskList";
let storedArray = JSON.parse(localStorage.getItem(key)) || [];
// let taskLength = JSON.parse(localStorage.getItem(key).length);
// console.log("the current task length is " + taskLength);

let clearButton = document.querySelector(".clearTasks");
clearButton.addEventListener("click", ()=>{
    localStorage.clear()
    storedArray = [];
    taskList.innerHTML="";
})

//task object
function Task(taskCat, taskName, taskDesc, taskDate, taskPrio){
    this.taskCat = taskCat;
    this.taskName = taskName;
    this.taskDesc = taskDesc;
    this.taskDate = taskDate;
    this.taskPrio = taskPrio;
}

export function formCollectInfo(e){
    e.preventDefault();

    //collects form data
    const taskCat = projectName();
    const taskName = document.getElementById("taskName").value;
    const taskDesc = document.getElementById("taskDescription").value;
    const taskDate = document.getElementById("taskDate").value;
    const taskPrio = document.getElementById("priority").value
    
    // Creates and saves task to localStorage
    let task = new Task(taskCat, taskName, taskDesc, taskDate, taskPrio);
    storedArray.push(task)
    console.log(storedArray);

    localStorage.setItem(key, JSON.stringify(storedArray));

    console.log(localStorage);
    console.log("Form reset and task saved to localStorage");

    createTask(task)
    form.reset()
};

export function displayAllTasks(){
    //clear the task list and then display all of the tasks.
    //need to add a "change category to all tasks"
    taskList.innerHTML="";

    storedArray.forEach(task => {
        console.log("task name is: " + task.taskName);
        createTask(task);
    })
}

export function displayExistingTasks (currentList){
    // let taskLength = JSON.parse(localStorage.getItem(key)).length;
    // console.log("the current task length is " + taskLength);
    taskList.innerHTML="";
    storedArray.forEach(task => {
        if(task.taskCat==currentList){
            console.log("task category is: " + task.taskCat);
            createTask(task);
        }
    });
}



function createTask(task){
    const taskObject = task;

    const displayTask = document.createElement("tr");

    const taskCat = document.createElement("td");
    taskCat.innerText = taskObject.taskCat;
    
    const taskName = document.createElement("td");
    taskName.innerText = taskObject.taskName;

    const taskDesc = document.createElement("td");
    taskDesc.innerText = taskObject.taskDesc;

    const taskDate = document.createElement("td");
    taskDate.innerText = taskObject.taskDate;

    const taskPrio = document.createElement("td");
    taskPrio.innerText = taskObject.taskPrio;

    // console.log("Create Task Cat: " + taskObject.taskCat)
    // console.log("Create Task Name: " + taskObject.taskName);
    // console.log("Create Task Description: " + taskObject.taskDesc);
    // console.log("Create Task Date: " + taskObject.taskDate);
    // console.log("Create Task Prio: " + taskObject.taskPrio);

    displayTask.appendChild(taskCat);
    displayTask.appendChild(taskName);
    displayTask.appendChild(taskDesc);
    displayTask.appendChild(taskDate);
    displayTask.appendChild(taskPrio);

    taskList.appendChild(displayTask);

}

 