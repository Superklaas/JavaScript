let score = 100
let total = 100
let percent = (score/total)*100

if(percent>=90) {
    console.log(`You  got an A (${Math.round(percent)}%)`)
} else if (percent<90 && percent>=80) {
    console.log(`You  got a B (${Math.round(percent)}%)`)
} else if (percent<80 && percent>=70) {
      console.log(`You  got a C (${Math.round(percent)}%)`)
} else if (percent<70 && percent>=60) {
      console.log(`You  got a D (${Math.round(percent)}%)`)
} else if (percent<60) {
      console.log(`You  got an F (${Math.round(percent)}%)`)
}