//For Loop
//Task1
for(let i=1;i<=10;i++){
    console.log(i);
}
//Task2
let num=5;
for(let i=0;i<=10;i++){
    console.log(num*i);
}

//While Loop
//Task3
// let i=1;
// let sum=0;
// while(i<=10){
//     sum=sum+i;
//     i++;
// }
// console.log("Total sum",sum);
//Task4
let i=10;
while(i>=1){
    console.log(i);
    i--;
}

//Do...While Loop
//Task5
let y=1;
do{
    console.log(y);
    y++;
}while(y<=5)
//Task6
let number=5;
let fact=1;
do{
    fact=fact*number;
    number--;
}while(number>0);
console.log("factorial of given number is",fact);  

//Nested Loops
//Task7

for(let i=1;i<=5;i++){
    for(let j=1;j<=i;j++){
        console.log("*");
    }
    console.log("\n");
}

//Loop Control Statements
//Task8

for(let i=1;i<=10;i++){
    if(i==5)
    continue;
console.log(i);
}
//Task9
for(let i=1;i<=10;i++){
    if(i==7)
        break;
    console.log(i);
}
//star pettern
for(let i=1;i<=5;i++){
    let stars="";
    for(let j=1;j<=i;j++){
        stars+="*";
    }
    console.log(stars);
}