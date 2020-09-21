// read existing notes from storage
const getSavedNotes = function() {
    const notesJSON = localStorage.getItem('notes')
    if(notesJSON != null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// add notes to storage
const saveNotes = function(notes) {
    localStorage.setItem('notes',JSON.stringify(notes))
}

// render notes
const renderNotes = function(notes,filters) {

    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note) {
        const addedNote = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(addedNote)
    })
}

// generate DOM structure for a note
const generateNoteDOM = function(note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const button = document.createElement('button')

    // setup the remove note button
    button.textContent = 'x'
    noteEl.appendChild(button)

    // setup the note text
    if(note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'Unnamed note'
    }
    noteEl.appendChild(textEl)

    return noteEl
}