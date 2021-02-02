

// displays any tasks stored in local strorage 
function displayTasks() {
    today.forEach(function (_thisHour) {
        $(`#${_thishour.id}`).val(_thisHour.task);
    })
}

 // this function will save any tasks to local storage
 function saveTask() {
    localStorage.setItem("today", JSON.stringify(today));
}

// displays any existing local storage if it already exists
function init() {
    var storedTasks = JSON.parse(localStorage.getItem("today"));
    if (storedTasks) {
        today = storedTasks;
    }

    saveTask();
    displayTasks();
}