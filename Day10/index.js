//Activity1: Basic Event Handling

//Task1: Add a click event listener to a button that changes the text content of a paragraph.
let para1=document.querySelector(".para");
let btn=document.querySelector(".btn1");
btn.addEventListener("click",()=>{
    para1.textContent="Clicked on Button";
});

//Task2: Add a double-click event listener to an image that toggles its visibility.

// let btn2=document.querySelector(".btn2");
// btn2.addEventListener("dblclick",()=>{
//      let x=document.querySelector(".image");
//      if(x.style.visibility==="hidden"){
//         x.style.visibility="visible";
//      }else {
//         x.style.visibility = "hidden";
//     }
// });

const img1=document.querySelector(".image");
img1.addEventListener("dblclick",()=>{
   if(img1.style.display==='none'){
    img1.style.display='block';
   }else{
    img1.style.display='none';
   }
});

//Activity2: Mouse Events
//Task3: Add a mouseover event listener to an element that changes its background color.
let head=document.querySelector(".heading");
head.addEventListener("mouseover",()=>{
    head.style.backgroundColor="brown";
});

//Task4: Add a mouseout event listener to an element that resets its background color.
head.addEventListener("mouseout",()=>{
    head.style.backgroundColor="aqua";
});

//Activity3: Keyboard Events
//Task5: Add a keydown event listener to an input field that logs the key pressed to the console.
let inputText=document.querySelector("#textInput");
inputText.addEventListener("keydown",(event)=>{
    console.log("Key pressed",event.key);
})

//Task6: Add a keyup event listener to an input field that display current value in a paragraph.
let para2=document.querySelector(".para2");
inputText.addEventListener("keyup",()=>{
    para2.textContent=`Current value: ${inputText.value}`;
});

//Activity4: Form Events
//Task7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let fName=document.querySelector(".input1").value;
let secondName=document.querySelector(".input2").value;
let mail=document.querySelector(".input3").value;
 

let form=document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let fName=document.querySelector(".input1").value;
    let secondName=document.querySelector(".input2").value;
    let mail=document.querySelector(".input3").value;
   
    let formData={
        name1:fName,
        name2:secondName,
        email:mail
    }; 

    console.log(formData);
});

//Task8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
let select=document.querySelector("#myselect");
let para3=document.querySelector(".para3");

select.addEventListener("change",()=>{
    const selectedValue=select.value;
    para3.textContent=`selected value: ${selectedValue}`;
});

//Activity5: Event Delegation
//Task9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
let myList=document.querySelector(".lists");
myList.addEventListener("click",(event)=>{
    if(event.target.nodeName==="LI"){
        console.log(`Clicked item: ${event.target.textContent}`);
    }
});

//Task10: Add a event listener to a parent element that listens for events from dynamically added child elements.
let myDiv=document.querySelector(".mydiv");
myDiv.addEventListener("click",(event)=>{
    if(event.target.tagName==="P")
    console.log(`${event.target.textContent}`);
});

for(let i=1;i<=10;i++){
    let childElement=document.createElement("p");
    childElement.textContent="This is para"+i;
    myDiv.appendChild(childElement);
}