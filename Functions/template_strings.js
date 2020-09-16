let name = 'klaas'
console.log(`Hey my name is ${name}`)

let getScore = function(name='Anonymous',score=0){
    return `Name: ${name}, Score: ${score}`
}
let score = getScore('Andrew',80)
console.log(score)