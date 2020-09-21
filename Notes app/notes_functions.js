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

// generate DOM structure for a note
const generateNoteDOM = function(note) {
    const addedNote = document.createElement('p')
    if(note.title.length > 0) {
        addedNote.textContent = note.title
    } else {
        addedNote.textContent = 'Unnamed note'
    }
    return addedNote
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