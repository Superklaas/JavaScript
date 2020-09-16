// In a scope you can access the variables in that scope or in any parent/ancestor scope
// Global scope vs local scope

// If keyword let is not used --> global variable
if(true) {
    // let name = 'Mike'
    if(true) {
        let name = 'Jen'
        console.log(name)
    }
}
if(true) {
    console.log(name)
}