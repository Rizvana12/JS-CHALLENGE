//Function declaration
//Task1
function findEvenOdd(num){
   return num%2==0?"Even":"Odd";
}
let result=findEvenOdd(10);
console.log(result);

//Task2

function findSquare(num){
    let output=num**2;
    return output;
}
let square=findSquare(4);
console.log(square);

//Function expression
//Task3
let maxNumber=function(num1,num2){
    return num1>num2?`${num1} is greater`:`${num2} is greater`;
}
console.log(maxNumber(5,7));

//Task4
let concatenateStr=function(str1,str2){
    return str1+" "+str2;
}
console.log(concatenateStr("Hello","There!"));

//Arrow Function
//Task5
let sum=(num1,num2)=>{
    return num1+num2;
}
console.log(sum(10,20));

//Task6
let checkChar=(str,char)=>{
    for(let i=0;i<=str.length;i++){
        if(str[i]===char){
            return true;
        }
    }
    return false;
}
console.log("Is character present:",checkChar("Hello",'o'));

//Function Parameters and Default Values
//Task7

function product(num1,num2=7){
    let result=num1*num2;

    return result;
}
console.log("Product of given two numbers is:",product(5,6));
console.log("Product of two given numbers is:",product(4));

//Task8
function greeting(name,age=25){
    return "Good morning" +" "+name+" "+"Age:"+age;
}
console.log(greeting("Daniel",23));
console.log(greeting("Nicol"));

//Higher-Order Functions
//Task9
const callFunction =(func,count)=>{
    for(let i=1;i<=count;i++){
        func();
    }
}
function functionOne(){
    console.log("Hello");
}
const sayHi=callFunction(functionOne,3)
console.log(sayHi);
//Task10
function two_function_value(funct1,funct2,value){
    const result_1=funct1(value);
    const result_2=funct2(result_1);
    console.log("Final answer is:");
    return result_2;
}
function funct1(num){
    let result =num*2;
    console.log(`Function one is called and multiply the ${num} by 2:`,result);
    return result;
}
function funct2(num){
    let result =num+5;
    console.log(`Function two is called and add the ${num} to 5:`,result);
    return result;
}
console.log(two_function_value(funct1,funct2,5));