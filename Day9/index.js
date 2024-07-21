//Activity1: Selecting and Manipulating Elements
//Task1: Select an HTML element by its ID and change its text content.
let updateContent=document.getElementById('heading');
updateContent.textContent="Good Morning";
// console.log(updateContent);

//Task2: Select an HTML element by its class and change its background color.
let updateColor=document.querySelector('.head');
updateColor.style.backgroundColor="Green";
// console.log(updateColor);

//Activity2: Creating and Appending Elements
//Task3: Create a new div element with some text content and append to the body.
let createDiv=document.createElement("div");
createDiv.textContent="Hello how are you";
document.body.appendChild(createDiv);

//Task4: Create a new li element and add it to an existing ul list.
let unorderedList=document.querySelector("ul")
let addList=document.createElement("li");
addList.textContent="Lays";
unorderedList.appendChild(addList);
// console.log(unorderedList);

//Activity3: Removing Elements
//Task5: Select an HTML element and remove it from the DOM.
document.body.removeChild(createDiv);

//Task6: Remove the last child of a specific HTML element.
unorderedList.removeChild(addList);

//Activity4: Modifying Attributes and Classes
//Task7: Select an html element and change one of its attribute(e.g.,src of img tag).
let changeImgLink=document.querySelector("img");
changeImgLink.src="chaicode.jpg";

//Task8: Add and remove a CSS class to/from an HTML element.
let element=document.querySelector("p");
element.classList.add("myClass");

let check=document.querySelector(".myClass");
check.textContent="Class Added";

//remove class
element.classList.remove("abc");

//Activity5: Event Handling
//Task9: Add a click event listener to a button that changes the text content of a paragraph.
let btn=document.querySelector("button");
btn.addEventListener("click",btnClick);
function btnClick(){
    let changeText=document.querySelector("p");
    changeText.textContent="Button is clicked";
    
};

//Task10: Add a mouseover event listener to an element that changes its border color.
let mouseOverElement=document.querySelector(".thirdheading");
mouseOverElement.addEventListener("mouseover", func);
mouseOverElement.addEventListener("mouseout", funcOne);
function func(){
    mouseOverElement.style.borderColor="yellow";
}
function funcOne(){
    mouseOverElement.style.borderColor="black";
}