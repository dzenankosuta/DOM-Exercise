// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);

// document.title = 123; we can change title of document
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);

// document.all[10].textContent = "Hello";
console.log(document.forms);
console.log(document.links);
console.log(document.images);

// GETELEMENTBYID //

// console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title"); // pristupanje elementu sa datim id
let header = document.getElementById("main-header");
console.log(headerTitle);

// headerTitle.textContent = "Hello";
console.log(headerTitle.textContent); // ne prati stilove
console.log(headerTitle.innerText); // slusa stilove

headerTitle.innerHTML = "<h3>Hello</h3>";

// PROMENA STILOVA //
header.style.borderBottom = "solid 3px #000";

// GETELEMENTSBYCLASSNAME //
let items = document.getElementsByClassName("list-group-item"); // uzimanje svih elemenata sa datom klasom
console.log(items);
console.log(items[1]); // pristupanje drugom takvom elementu
items[1].textContent = "Hello 2"; // promena sadrzaja
items[1].style.fontWeight = "bold"; // promena stilova..
items[1].style.backgroundColor = "yellow";

// items.style.backgroundColor = "#f4f4f4"; nece da radi. Vec mora preko for petlje:

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// GETELEMENTSBYTAGNAME //

let li = document.getElementsByTagName("li"); // uzimanje svih elemenata sa datim tagom
console.log(li);
console.log(li[1]); // pristupanje drugom takvom elementu
li[1].textContent = "Hello 2"; // promena sadrzaja
li[1].style.fontWeight = "bold"; // promena stilova..
li[1].style.backgroundColor = "yellow";

// li.style.backgroundColor = "#f4f4f4"; nece da radi. Vec mora preko for petlje:

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4"; // primenjuje se na sve li tagove, bez obzira na klasu
// }

// QUERYSELECTOR //

// po defaultu uzima samo prvi takav selector, querySelectorAll nam daje sve.

let header2 = document.querySelector("#main-header"); // uzima prvi element sa datim id
header2.style.borderBottom = "solid 4px #ccc";

let input = document.querySelector("input"); // uzima prvi element sa datim HTML tagom
input.value = "Hello World";

let submit = document.querySelector("input[type='submit']"); // uzima dati element  sa odredjenim atributom
submit.value = "SEND";

let items2 = document.querySelector(".list-group-item");
items2.style.color = "red";

let secondItem = document.querySelector(".list-group-item:nth-child(2)");
secondItem.style.color = "blue";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// QUERYSELECTORALL //

let titles = document.querySelectorAll(".title");

console.log(titles);
titles[0].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#f4f4f4";
  even[i].style.backgroundColor = "#ccc";
}
