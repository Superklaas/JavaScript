
function gradeCalculator(score,total) {
    let percent = (score/total)*100
    let grade
    if(percent>=90) {
        grade = "A"
    } else if (percent<90 && percent>=80) {
        grade = "B"
    } else if (percent<80 && percent>=70) {
        grade = "C"
    } else if (percent<70 && percent>=60) {
        grade = "D"
    } else if (percent<60) {
        grade = "F"
    }
    return `Your grade is ${grade} (${Math.round(percent)}%)`
}

let result = gradeCalculator(89,119)
console.log(result)



