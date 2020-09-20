// ARRAY WITH EXISTING TODOS
const todos = [{
    title: 'talk to god',
    completed: true,
},{
    title: 'drink tea',
    completed: false,
},{
    title: 'call jan stes',
    completed: false,
}]

// OBJECT CONTAINING QUERY TEXT
const filters = {
    searchText: '',
    hideCompleted: false,
}

// FILTER TODOS ACCORDING TO QUERY, GET NUMBER OF INCOMPLETED TODOS, DISPLAY RESULTS QUERY
const renderTodos = function(todos,filters) {

    // FILTER TODOS ACCORDING TO QUERY TEXT AND CHECKBOX HIDE COMPLETED
    let filteredTodos = todos.filter(function(todo){
        const searchTextMatch = todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        return searchTextMatch && hideCompletedMatch
    })

    // GET INCOMPLETED FILTERED TODOS
    const incompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.completed
    })

    // CLEAR PREVIOUS RESULTS
    document.querySelector('#todos').innerHTML = ''

    // DISPLAY AMOUNT OF INCOMPLETED TODOS
    const amountIncompleteTodos = document.createElement('h2')
    amountIncompleteTodos.textContent = `You have ${incompleteTodos.length} todos left`
    document.querySelector('#todos').appendChild(amountIncompleteTodos)

    // DISPLAY FILTERED TODOS
    filteredTodos.forEach(function(todo){
    const newTodo = document.createElement('p')
    newTodo.textContent = todo.title
    document.querySelector('#todos').appendChild(newTodo)
    })
}

// DISPLAY ALL TODOS BEFORE FILTERING
renderTodos(todos,filters)

// GET QUERY AND DISPLAY TODOS MATCHING THE QUERY
document.querySelector('#search-text').addEventListener('input',function(e) {
    filters.searchText = e.target.value
    renderTodos(todos,filters)
})

// ADD NEW TODO
document.querySelector('#new-todo').addEventListener('submit',function(e){
    e.preventDefault()
    todos.push({
        title: e.target.elements.todo.value,
        completed: false
    })
    renderTodos(todos,filters)
    e.target.elements.todo.value = ''
})

// CHECKBOX HIDE COMPLETED
document.querySelector('#checkbox').addEventListener('change',function(e){
    filters.hideCompleted = e.target.checked
    renderTodos(todos,filters)
})



/*
// REMOVE
const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    if (p.textContent.includes('the')) {
        p.remove()
    }
})*/

