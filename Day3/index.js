//if-elsre statement
//Task1:
let number=0;
if(number>0){
    console.log("Number is positive");

}else if(number<0){
    console.log("Number is negative");

}else{
    console.log("Number is zero");
}
//Task2:
var age=19;
if(age>=18){
    console.log("Person is eligible to vote");
}else{
    console.log("Person is not eligible for vote");
}

//Nested if-else statement
//Task3:
var num1=3;
var num2=5;
var num3=7;

if(num1>num2&&num1>num3){
    console.log(`${num1} is the largest number`);
}else if(num2>num1&&num2>num3){
    console.log(`${num2} is the largest number`);
}else{
    console.log(`${num3} is the largest number`)
}

//Switch case
//Task4

function checkDay(day){
    switch(day){
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
             console.log("Invalid Day")                            
    }
}
checkDay(8);

//Task5

let grade;
let score=50;
switch(true){
    case(score>= 80): grade='Grade A';
    console.log('Grade A');
    break;
    case(score>=70): grade='Grade B';
    console.log('Grade B');
    break;
    case(score>=60): grade='Grade C';
    console.log('Grade C');
    break;
    case(score>=50): grade='Grade D';
    console.log('Grade D');
    break;
    default:grade='Grade F';
    console.log('Grade F');
    break;
}

//Conditional(Ternary) Operator

let num=10;

let output=num%2==0?"Even":"Odd";

console.log(output);

//Combining conditions

function leapYear(year){
    if(year%4==0&&year%100!=0||year%400==0){
        console.log("It is leap year");
    }else{
        console.log("It is not a leap year");
    }
}

leapYear(400);