const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        // we are tapping on checked button if task is completed
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN")
    {
        //we are tapping on cross to remove the task 
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// to save data
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// to get saved data
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();