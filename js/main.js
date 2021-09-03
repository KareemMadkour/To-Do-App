let addBtn = document.getElementById('addBtn');
let taskInput = document.getElementById('taskInput');
let noTasks = document.getElementById('noTasks');
let allTasks = document.getElementById('allTasks');
let invalid = document.getElementById('invalid');
let closeValidationMessage = document.querySelector('#invalid .close');
let model = document.getElementById('model');
let modelBtn = document.getElementById('modelBtn');

let btn = document.querySelector('button')

let showModel = () => {
    model.classList.toggle('block')
}
modelBtn.addEventListener('click', showModel);

let savedTask = () => {
    alert("Task added successfully!");
}

let closeValidationMessageFunction = () => {
    invalid.classList.toggle('none')
}
let noTasksShow = () => {
    if (allTasks.childElementCount > 0) {
        noTasks.classList.add('none')
    } else {
        noTasks.classList.remove('none')
    }
}
// Add task
let addTask = () => {
    let taskData = taskInput.value
    if (taskData.trim() == "") {
        closeValidationMessageFunction();
    } else if (taskData.length < 3 || taskData.length > 30) {
        alert("Please enter task between 3 and 30 characters");
    } else {
        noTasks.classList.add('none')
        allTasks.innerHTML += `
        <div class = "alert taskCheck alert-info">  ${taskData} <i class="delete fas fa-trash-alt float-right" style="font-size: 20px;"></i>
        </div>
        `;
        taskInput.value = "";
        savedTask();
        showModel();
    }
    allTasks.addEventListener('click', (e) => {
        if (e.target.classList.contains('taskCheck')) {
            e.target.classList.toggle('check');
        }
    })
}
addBtn.addEventListener('click', addTask);
closeValidationMessage.addEventListener('click', closeValidationMessageFunction);
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
    noTasksShow();
})

btn.onclick = () => {
    if (document.body.classList.contains('btnDark')) {
        document.body.classList.toggle('btnDark');
    } else {
        document.body.classList.toggle('btnLight');
    }
}