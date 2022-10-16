// TRAVERSING THE DOM //

let itemList = document.querySelector("#items");

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "#f4f4f4";
console.log(itemList.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes); Vraca nam niz, gde se pojavi text, to predstavlja novi red

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = "yellow";

// firstChild - slicno kao kod childNodes, gde imamo text na svaki novi red

console.log(itemList.firstChild);

// firstElementChild
console.log(itemList.firstElementChild);

itemList.firstElementChild.textContent = "Hello 1";

// lastChild - slicno kao kod childNodes, gde imamo text na svaki novi red

console.log(itemList.lastChild);

// lastElementChild
console.log(itemList.lastElementChild);

itemList.lastElementChild.textContent = "Hello 4";

// nextSibling

console.log(itemList.nextSibling);

// nextElementSibling

console.log(itemList.nextElementSibling);


// previousSibling

console.log(itemList.previousSibling);

// previousElementSibling

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "green";

// createElement

// Create a div
let newDiv = document.createElement("div");

// Add class
newDiv.className = "hello";

// Add id
newDiv.id = "hello 1";

// Add new attr
newDiv.setAttribute("title", "Hello Div");

// Create text node
let newDivText = document.createTextNode("Hello World");

// add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1");

console.log(newDiv);

container.insertBefore(newDiv, h1);
