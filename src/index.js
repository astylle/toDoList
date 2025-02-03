import './style.css';
import {displayTask} from "./taskFeatures/existingTasks";
import { formCollectInfo, displayExistingTasks,displayAllTasks} from './taskFeatures/formFeatures';

const defaultList = "All Tasks";
let currentList = defaultList;
let title = document.getElementById("title");


let form = document.getElementById("taskForm");
form.addEventListener("submit", formCollectInfo);
displayExistingTasks();


let buttonsAllTasks = document.querySelector(".allTasks");
buttonsAllTasks.addEventListener("click", (e)=>{
    title.innerHTML="All Tasks"
    displayAllTasks(currentList);
});

let buttonsProject = document.querySelectorAll(".projects");


buttonsProject.forEach(buttonsProject => {
    buttonsProject.addEventListener("click", (e) => { 
        currentList = e.target.textContent;        
        title.innerHTML= currentList;
        displayExistingTasks(currentList);
        
    });
}); 




export function getList(){
    return currentList;
};

export default form;
