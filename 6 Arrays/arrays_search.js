const tasks = [{
    title: 'speak to god',
    completed: true,
},{
    title: 'drink tea',
    completed: false,
},{
    title: 'call jan stes',
    completed: false,
}]

// findTaskIndex
const findTaskIndex = function(tasks,taskTitle) {
    const taskIndex = tasks.findIndex(function(task) {
        return task.title === taskTitle
    })
    return taskIndex
}
const taskIndex = findTaskIndex(tasks,'speak to god')
console.log(`Index task: ${taskIndex}`)

// findTask
const findTask = function(tasks,taskTitle) {
    const task = tasks.find(function(task) {
        return task.title === taskTitle
    })
    return task
}
const task = findTask(tasks,'call jan stes')
console.log(task)
console.log(tasks)

// deleteTask
const deleteTask = function(tasks,taskTitle) {
    const taskIndex = tasks.findIndex(function(task) {
        return task.title === taskTitle
    })
    if (taskIndex>-1) {
        tasks.splice(taskIndex,1)
    }
}
deleteTask(tasks,'call jan stes')
console.log(tasks)