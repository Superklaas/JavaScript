const square = (num) => num*num
const squareLong = (num) => {
    return num*num
}
console.log(square(5))

const people = [{
    name: 'Klaas',
    age: 36
},{
    name: 'Beni',
    age: 29
}]
const age29 = people.find((person) => person.age === 29)
console.log(age29.name)