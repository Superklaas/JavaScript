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

console.log('SORT TASKS')
const sortTasks = function(tasks) {
    return tasks.sort(function(a,b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
}
const sortedTasks = sortTasks(tasks)
console.log(sortedTasks)