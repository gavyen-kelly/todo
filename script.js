const taskInput = document.getElementById("taskInput")
const submitTaskButton = document.getElementById("submitButton")
const taskDueDate = document.getElementById("taskDate")
const taskList = document.getElementById("taskList")
const newTaskButton = document.getElementById("openNewTaskMenuButton")
const completedTaskList = document.getElementById("completedTasks")
let numOfTasks = 0

const addTask = () => {
    let newTaskInput = taskInput.value
    let newTaskDueDate = taskDueDate.value

    let newTask = document.createElement('li');
    newTask.textContent = `${newTaskInput} Due:${newTaskDueDate}`;
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
