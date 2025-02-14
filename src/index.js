import './style.css';
import { createNewProject, getProjectName } from './taskFeatures/newProject';
import { formCollectInfo, displayExistingTasks, displayAllTasks} from './taskFeatures/formFeatures';


let projectForm = document.getElementById("newProject");
projectForm.addEventListener("submit", createNewProject);

let form = document.getElementById("taskForm");
form.addEventListener("submit", formCollectInfo);

displayExistingTasks;

let buttonsAllTasks = document.querySelector(".allTasks");
buttonsAllTasks.addEventListener("click", (e)=>{
    title.innerHTML="All Tasks";
    
    displayAllTasks(getProjectName);
    console.log("display all tasks");
});




export default form;
