//Activity1: Template literal
//Task1: Use template literals to create a string that include varible person's name and age, and log the string to console.
let naam="Daniel";
let age=28;
console.log(`Person's name ${naam} and age is ${age}`);

//Task2: Create a multi-line string using template literals and log it to console.
let str=`Hi my name is:
Rizvana
and my age is:
28 year's old.`;
console.log(str);   

//Activity2: Destructuring
//Task3: Use array destructuring to extract the first and second elements from array of numbers and log them to the console.
let numbers=[1,2,3,4,5];
let [first,second]=numbers;
console.log(`First element ${first}`);
console.log(`Second element ${second}`);

//Task4: Use object destructuring to extract the title and author from the book object and log them to console.
 book={
    title:"Harry Potter",
    author:"JK Rowling",
    Year:1996,
 };
let {title,author}=book;
console.log(title);
console.log(author);

//Activity3: Spread and Rest operator
//Task5: Use the spread operator to create a new array that includes all the elements of existing array plus additional elements,and log the new array to the console.
let arr=['a','b','c','d'];
let arr2=[...arr];
arr2.push('e','f');
console.log(arr2);

//Task6: Use a rest operator in a function to accept an arbitrary numbers of arguments,sum them, and return the result.
function sum(...theArgs){
    let total=0;
    for(let args of theArgs){
        total=total+args;
    }
    return total;
}
console.log(`Total sum: ${sum(1,2,3,4,5)}`);

//Activity4: Default Parameters
//Task7: Write a function that takes two parameters and return their product, with the second parameter having default value of 1.Log the result of calling this function with and without the second parameter.
function product(num1,num2=1){
     return num1*num2;
}
console.log(product(3,4));
console.log(product(4));

//Activity5: Enhanced Object Literals
//Task8: Use enhanced object literal to create an object with method and properties, and log the object to console.
let stName="Peter";
let course="Btech";
let year=2024;
let studentDetails={
    stName,
    course,
    year,
    studentInfo:function(){
        return `${this.stName} completed ${this.course} in ${this.year}`
    }
};
console.log(studentDetails);

//Task9: Create an object with computed propert names based on variables and log the object to the console.
let name1="firstName";
let name2="lastName";
let age2="age";
let details={
    [name1]:"John",
    [name2]:"Doe",
    [age2]:25,
};
console.log(details);