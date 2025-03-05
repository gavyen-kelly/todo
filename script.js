
const taskInput = document.getElementById("taskInput")
const submitTaskButton = document.getElementById("submitButton")
const taskDueDate = document.getElementById("taskDate")
const taskList = document.getElementById("taskList")
const newTaskButton = document.getElementById("openNewTaskMenuButton")
const completedTaskList = document.getElementById("completedTasks")
const taskPopupPage = document.getElementById("newTaskPopup")
const tasks = document.getElementById('tasks')
const tabAllTasks = document.getElementById('')
let numOfTasks = 0

window.addEventListener('DOMContentLoaded', () => {
    addTask('Hello', '3/4/2025')
    addTask('Hello2', '3/4/2025')
    addTask('Hello3', '3/4/2025')
})

const submitTaskInfo = () => {
    let newTaskInput = taskInput.value
    let newTaskDueDate = taskDueDate.value
    return addTask(newTaskInput, newTaskDueDate)
}
const addTask = (taskInput, taskDueDate) => {

    let newTask = document.createElement('li');
    newTask.textContent = `${taskInput} Due:${taskDueDate}`;
    newTask.classList.add("task")
    numOfTasks++;
    newTask.id = numOfTasks;
    let newTaskId = newTask.id

    let newTaskDeleteButton = document.createElement('button')
    newTaskDeleteButton.textContent = "Delete Task"
    newTaskDeleteButton.addEventListener('click', () => {
        let taskToDeleteId = newTaskId
        let taskToDelete = document.getElementById(taskToDeleteId)
        let parentElement = taskToDelete.parentElement
        console.log(taskToDelete)
        parentElement.removeChild(taskToDelete)
        numOfTasks--;
    })

    let taskCompleteBox = document.createElement('input')
    taskCompleteBox.setAttribute("type", "checkbox")
    taskCompleteBox.addEventListener('change', () => {
        completeTask(taskId = newTaskId, taskIdBox = taskCompleteBox)
    })

    newTask.insertBefore(taskCompleteBox, newTask.firstChild)
    newTask.appendChild(newTaskDeleteButton)
    taskInput.value = ''
    taskDueDate.value = ''
    taskPopupPage.classList.add('hidden')
    return taskList.appendChild(newTask)
}

const completeTask = (taskId, taskIdBox) => {
    let task = document.getElementById(taskId)
    if (taskIdBox.checked) {
        task.classList.add('strikethrough')
        console.log('checked')
        taskList.removeChild(task)
        completedTaskList.appendChild(task)
    }
    else {
        task.classList.remove('strikethrough')
        console.log('unchecked')
        completedTaskList.removeChild(task)
        taskList.appendChild(task)
    }
}

const toggleTaskInputPopup = () => {
    taskPopupPage.classList.remove('hidden')
}
const overlay = taskPopupPage.querySelector('.overlay');
overlay.addEventListener('click', (e) => {
    e.stopPropagation();
});