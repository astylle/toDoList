import './style.css';
import { createNewProject} from './taskFeatures/newProject';
import { formCollectInfo, displayAllTasks, displayProjectTabs} from './taskFeatures/formFeatures';

let projectForm = document.getElementById("newProject");
projectForm.addEventListener("submit", createNewProject);

let form = document.getElementById("taskForm");
form.addEventListener("submit", formCollectInfo);

// let taskList = document.getElementById("taskList");

let buttonsAllTasks = document.querySelector(".allTasks");
buttonsAllTasks.addEventListener("click", ()=>{
    let title = document.getElementById("title");
    title.innerHTML="All Tasks";
    
    displayAllTasks();
    console.log("display all tasks");
});

displayProjectTabs();
displayAllTasks();


export default form;
