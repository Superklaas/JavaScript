const noteId = location.hash.substring(1)
const notes = getSavedNotes()
const note = notes.find(function(note){
    return note.id === noteId
})

if(note === undefined) {
    location.assign('/JavaScript/Notes app/index.html')
}

// get initial title & body of the note
document.querySelector('#note-title').value = note.title
document.querySelector('#note-body').value = note.body

// set title note
document.querySelector('#note-title').addEventListener('input',function(e) {
    note.title = e.target.value
    saveNotes(notes)
})

// set body note
document.querySelector('#note-body').addEventListener('input',function(e) {
    note.body = e.target.value
    saveNotes(notes)
})

// remove note
document.querySelector('#remove-note').addEventListener('click',function(e) {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/JavaScript/Notes app/index.html')
})