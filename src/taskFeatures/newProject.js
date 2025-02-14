import { displayExistingTasks } from "./formFeatures";

let title = document.getElementById("title");
let sideBar = document.getElementById("projectList");
const defaultList = "All Tasks";
let currentList = defaultList;

//when clicking on a project, this piece of code places an event listener to display the new tasks. 
let buttonsProject = document.querySelectorAll(".projects");
buttonsProject.forEach(buttonsProject => {
    buttonsProject.addEventListener("click", (e) => { 
        let currentList = e.target.textContent;        
        title.innerHTML= currentList;
        displayExistingTasks(getProjectName);
        console.log("display existing tasks");
    });
}); 

export function createNewProject(e){
    e.preventDefault();
    let projectName = document.getElementById("projectName").value;
    currentList = projectName;
    // updateTitle(currentList)
    // createProjectTab(currentList);
    changeTabName(currentList);
    createProjectTab(currentList);
    displayExistingTasks(currentList);
    getProjectName();
}

function changeTabName(projectName){
    title.innerHTML = projectName;
}

function changeTab(projectName){
    displayExistingTasks(projectName);
}

function createProjectTab(projectName){
    let tab = document.createElement("button");
    tab.innerHTML = projectName;    
    tab.onclick = function(){changeTab(projectName);}
    sideBar.appendChild(tab);
}

// function updateTitle(e){
//     let categoryText = e.target.textContent;        
//     title.innerHTML= categoryText;
//     displayExistingTasks(getProjectName);
//     console.log("display existing tasks");
// }


export function getProjectName(){
    return currentList;
}