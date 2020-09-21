// book object
let myBook = {
    title: 'Cien anos de soledad',
    author: 'Gabriel Garcia Marquez',
    origin: 'Cartagena, Colombia',
}

// cf. toString method to display variables object
function getSummary(book) {
    return `${book.title} by ${book.author}`
}
let bookSummary = getSummary(myBook)
console.log(bookSummary)

// challenge
function makeTempObject(fahrenheit) {
    let celsius = (fahrenheit-32)/1.8;
    let kelvin = celsius + 273.15;
    return {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: kelvin,
    }
}
let tempObject = makeTempObject(67);
console.log(tempObject);
console.log(tempObject.celsius);

