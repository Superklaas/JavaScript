/*Function
    input (argument)
    code
    output (return value)*/

function greetUser() {
    console.log("Welcome user")
}
greetUser()

function displayNumber(num) {
    console.log(num)
}
displayNumber(3)

function square(num) {
    let result = num*num
    return result
}
console.log(square(9))

function convertToCelsius(tempF) {
    let tempC = (tempF-32)/1.8
    return tempC
}
let temp1 = convertToCelsius(32)
let temp2 = convertToCelsius(68)
console.log(temp1)
console.log(temp2)