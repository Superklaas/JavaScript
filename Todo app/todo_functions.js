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

// generate DOM for list summary
const generateSummaryDOM = function(incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}

// remove todo
const removeTodo = function(id) {
    const todoIndex = todos.findIndex(function(todo){
        return todo.id === id
    })
    if (todoIndex != -1) {
        todos.splice(todoIndex,1)
    }
}

// toggle todo
const toggleTodo = function(id) {
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    if(todo != undefined) {
        todo.completed = !todo.completed
    }
}

// generate DOM for individual todo
const generateTodoDOM = function(todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // setup checkbox
    checkbox.setAttribute("type", "checkbox")
    checkbox.checked = todo.completed
    todoEl.appendChild(checkbox)
    checkbox.addEventListener('click',function(){
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    // setup todo text
    todoText.textContent = todo.title
    todoEl.appendChild(todoText)

    // setup remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)
    removeButton.addEventListener('click',function(){
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos,filters)
    })

    return todoEl
}