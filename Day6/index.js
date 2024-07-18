//Activity1: Array creation and access
//Task1: Create an array of numbers from 1 to 5 and log the array to the console.
let numbers=[1,2,3,4,5];
console.log(numbers);

//Task2: Access the first and last elements of the array and log them to the console.
console.log("First element of the array:",numbers[0]);
console.log("Last element of the array:",numbers[4]);

//Activity2: Array Methods(Basic)
//Task3: Use the push method to add a new number to the end of the arraay and log the updated array.
numbers.push(6);
console.log("Array after adding 6 at the end:",numbers);

//Task4: Use the pop method to remove the last element from the array and log the updated array.
numbers.pop(6);
console.log("Array after removing 6 from the end:",numbers);

//Task5: Use the shift method to remove the first element from the array and log the updated array.
numbers.shift(1);
console.log("Array after removing 1 from the beginning:",numbers);

//Task6: Use the unshift method to add the new number to the beginning of the array and log the updated array.
numbers.unshift(1);
console.log("Array after adding 1 to the beginnig:",numbers);

//Array methods(Intermediate)
//Task7: Use the map method to create a new array where each number is doubled and log the new array.
let newArray=numbers.map(num=>num*2);
console.log("New Array:",newArray);

//Task8: Use the filter method to create a new array with only even numbers and log the new array.
let evenNumArray=numbers.filter(num=>num%2==0);
console.log("Filtered Array:",evenNumArray);

//Task9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log("Total sum of the Array:",sum);

//Activity4: Array Iteration
//Task10: Use a for loop to iterate over the array and log each element to the console.
console.log("Elements of the array aftyer iteration:")
for (let i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}

//Task11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Elements of the array after iteration using forEach loop:")
numbers.forEach(num=>console.log(num));

//Activity5: Multi-dimensional Arrays
//Task12: Create a two dimensional array(matrix) and log the entire array to console.

let items=[[1,2,3],[4,5,6],[7,8,9]];
console.log("Two dimensional array:",items);

//Task13: Access and log a specific element from the two-dimensional array.
console.log("Element of first row and second column:",items[0][1]);