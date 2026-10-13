let enterTask = document.getElementById("enter-task");
let add = document.getElementById("add-button");
let list = document.getElementById("task-list");
let total = document.getElementById("total-task");
let counter = 0;

function textValue () {

    if (enterTask.value === "") {
        return;
    }

    const newTask = document.createElement("li");
    const taskText = document.createElement("span");
    taskText.textContent = enterTask.value + " ";
    newTask.appendChild(taskText);
    enterTask.value = '';

    counter += 1;
    total.textContent = counter;

    taskText.addEventListener('click', function () {
        if (taskText.style.textDecoration === "line-through") {
            taskText.style.textDecoration = "none";
        }
        else {
            taskText.style.textDecoration = "line-through";
        }
    })

    const deletebutton = document.createElement("button");
    deletebutton.textContent = 'Delete';
    deletebutton.type = 'button';
    newTask.appendChild(deletebutton);

    deletebutton.addEventListener('click', function() {
        newTask.remove();
        counter -= 1;
        total.textContent = counter;
    });

    list.appendChild(newTask);
}

add.addEventListener('click', textValue);

enterTask.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        textValue();
    }
});

