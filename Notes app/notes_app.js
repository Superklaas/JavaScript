// ARRAY WITH NOTES

const notes = [{
    title: 'My first trip',
    text: 'I went to Antartica',
},{
    title: 'My second trip',
    text: 'I went to Uruguay',
},{
    title: 'My third trip',
    text: 'I went to the USA',
}]

// INPUT QUERY, SEARCH NOTES FOR QUERY, DISPLAY RESULTS

// object containing query (entered at #search-text)
const filters = {
    searchText: ''
}

// function to display notes matching the query
const renderNotes = function(notes,filters) {
    // array with all the notes matching the query
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // delete existing elements in div #notes
    document.querySelector('#notes').innerHTML = ''
    // displaying the filtered notes (cf. 'Add elements via the DOM')
    filteredNotes.forEach(function(note) {
        const addedNote = document.createElement('p')
        addedNote.textContent = note.title
        document.querySelector('#notes').appendChild(addedNote)
    })
}

renderNotes(notes,filters)

// get query from user input and display notes matching the query
document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

// BUTTON 'CREATE NOTE'
document.querySelector('#create-note').addEventListener('click',function (e) {
    console.log(e)
    e.target.textContent= 'Button clicked'
})

// DROPDOWN 'SORT BY'
document.querySelector('#sort-by').addEventListener('change',function (e) {
    console.log(e.target.value)
})





/*// DOM (document object model) = JavaScript object that models an HTML document
querying HTML document with document.querySelector()
connecting variable with it
do operations on that variable

// query one element
*//*const p = document.querySelector('p')
p.remove()*//*

// query all
const ps = document.querySelectorAll('p')
ps.forEach(function(p) {
    p.textContent = '*****'
    //console.log(p.textContent)
    //p.remove()
})

// add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'new element'
document.querySelector('body').appendChild(newParagraph)*/
