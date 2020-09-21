const user = {
    name: 'Klaas',
    location: 'Kontich',
}

const userJSON = JSON.stringify(user)
localStorage.setItem('user',userJSON)

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} lives in ${user.location}`)

let notes = []

// Check for existing saved data
const notesJSON = localStorage.getItem('notes')
if(notesJSON != null) {
    const notes = JSON.parse(notesJSON)
}
