const defaultList = "default";
// let projectName = "";

let currentList = defaultList;
let buttons = document.querySelectorAll(".projects");

console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", (e) => { 
        currentList = e.target.textContent;
        console.log(currentList);
    
    });
});

export function getList(){
    return currentList;
};