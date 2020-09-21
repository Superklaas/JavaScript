const tasks = [{
    title: 'talk to god',
    completed: true,
},{
    title: 'drink tea',
    completed: false,
},{
    title: 'call jan stes',
    completed: false,
}]

console.log('COMPLETED TASKS')
const getCompletedTasks = function(tasks) {
    return tasks.filter(function(task) {
        return task.completed;
    })
}
const completedTasks = getCompletedTasks(tasks)
console.log(completedTasks)

console.log('THINGS TO DO')
const getThingsToDo = function(tasks) {
    return tasks.filter(function(task) {
        return !task.completed;
    })
}
const thingsToDo = getThingsToDo(tasks)
console.log(thingsToDo)

console.log('QUERY TASKS')
const findTasks = function(tasks,query) {
    const filteredTasks = tasks.filter(function(task,index) {
        return task.title.toLowerCase().includes(query.toLowerCase())
    })
    return filteredTasks
}
const filteredTasks = findTasks(tasks,'t')
console.log(filteredTasks)


