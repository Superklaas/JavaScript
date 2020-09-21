let isValidPassword = function(password) {
    let validator = true
    if (password.length<=8 || password.includes("password")) {
        validator = false
    }
    return validator
}

console.log(isValidPassword("achui"))
console.log(isValidPassword("oahdojladm^^àà"))
console.log(isValidPassword("lkdlazkpasswordkjkk"))
