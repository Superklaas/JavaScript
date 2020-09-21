let min = 1;
let max = 5;

let makeGuess = function(guess) {
    let goal = Math.floor(Math.random()*(max-min+1)+min)
    console.log('Guess: ' + guess)
    console.log('Goal: ' + goal)
    return (guess === goal)
}

console.log(makeGuess(1))