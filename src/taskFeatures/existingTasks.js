let taskList = document.getElementById("taskList");

export function displayTask(taskCat){
    const taskObject = JSON.parse(localStorage.getItem("task"));
    console.log(taskObject)

    for (const task in taskObject){
        if(taskObject.taskCat = taskCat){
            console.log("peepeees")

        }

    }
}



