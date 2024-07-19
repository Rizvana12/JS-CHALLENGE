//Activity1: Object Creation and Access
//Task1: Create an object representing a book with properties like title ,author and year and log the object to console.
let book={
    title: "Harry Potter",
    author: "JK Rowling",
    year: 2012,
};
console.log(book);

//Task2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

//Activity2: Object Methods
//Task3: Add a method to the book object that returns a string with book's title and author and log the result of calling this method.
book.getInfo=function(){
    return `${this.title} by ${this.author}`
};
console.log(book.getInfo());

//Task4: Add a method to the book object that takes a parameter(year) and updates the book's year property, and ;log the updated object.
book.updateYear=function(newYear){
    this.year=newYear;
};
book.updateYear(1996);
console.log(book);

//Activity3: Nested Objects
//Task5: Create a nested object representing a library with properties like name and books(an array of book objects) and log the library object to console.
let library={
    name:"City library",
    books:[
        {title:"Console Busters",author:"MJ",year:2024},
        {title:"Chai or Code",author:"HK",year:2023}
    ],
};
console.log(library);

//Task6: Access and log the name of the library and the titles of all the books in library.
console.log(library.name);
library.books.forEach((book)=>{
    console.log(book.title);
});

//Activity4: The this keyword
//Task7: Add a method to the book object that uses this keyword to return a string with book's title and year, and log the result of calling this method.
book.getTitleAndYear=function(){
    return `${this.title} (${this.year})`
}
console.log(book.getTitleAndYear());

//Activity5: Object Iteration
//Task8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for(let key in book){
    console.log(key,book[key]);
}

//Task9: Use object.keys and object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book))