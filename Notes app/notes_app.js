let notes = []

const filters = {
    searchText: ''
}

// Check for existing saved data
const notesJSON = localStorage.getItem('notes')
if(notesJSON != null) {
    notes = JSON.parse(notesJSON)
}

const renderNotes = function(notes,filters) {
    // filter notes by query
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    // clear displayed notes
    document.querySelector('#notes').innerHTML = ''
    // add notes to display
    filteredNotes.forEach(function(note) {
        const addedNote = document.createElement('p')
        if(note.title.length > 0) {
            addedNote.textContent = note.title
        } else {
            addedNote.textContent = 'Unnamed note'
        }
        document.querySelector('#notes').appendChild(addedNote)
    })
}

renderNotes(notes,filters)

document.querySelector('#create-note').addEventListener('click',function (e) {
    notes.push({
        title: '',
        body: '',
    })
    localStorage.setItem('notes',JSON.stringify(notes))
    renderNotes(notes,filters)
})

document.querySelector('#search-text').addEventListener('input',function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

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

/*
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

// INPUT QUERY, SEARCH NOTES FOR QUERY, DISPLAY RESULTS*/
