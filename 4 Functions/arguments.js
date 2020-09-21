// Default arguments
let getScore = function(name='Anonymous',score=0){
    return name + " " + score
}
let score = getScore('Andrew',80)
console.log(score)

// Challenge
let getTip = function(total=0,tipPercent=0.0) {
    let tip = total*tipPercent
    return tip
}
let tip1 = getTip(80,0.1)
console.log(tip1)