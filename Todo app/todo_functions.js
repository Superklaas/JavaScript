// read existing todos from storage
const getSavedTodos = function() {
    const todosJSON = localStorage.getItem('todos')
    if(todosJSON != null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// save todos to storage
const saveTodos = function(todos) {
    localStorage.setItem('todos',JSON.stringify(todos))
}

// render todos
const renderTodos = function(todos,filters) {

    const filteredTodos = filterTodos(todos,filters)

    const incompleteTodos = getIncompleteTodos(filteredTodos)

    document.querySelector('#todos').innerHTML = ''

    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function(todo){
        const newTodo = generateTodoDOM(todo)
        document.querySelector('#todos').appendChild(newTodo)
    })
}

// filter todos
const filterTodos = function(todos,filters) {
    let filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })
    return filteredTodos
}

// get incomplete todos
const getIncompleteTodos = function(filteredTodos) {
    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })
    return incompleteTodos
}


// generate DOM for individual todo
const generateTodoDOM = function(todo) {
    const newTodo = document.createElement('p')
    newTodo.textContent = todo.title
    return newTodo
}

// generate DOM for list summary
const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}