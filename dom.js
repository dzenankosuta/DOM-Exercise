// EXAMINE THE DOCUMENT OBJECT
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

// GETELEMENTBYID

// console.log(document.getElementById("header-title"));
let headerTitle = document.getElementById("header-title");
let header = document.getElementById("main-header");
console.log(headerTitle);
// headerTitle.textContent = "Hello";
console.log(headerTitle.textContent); // ne prati stilove
console.log(headerTitle.innerText); // slusa stilove

headerTitle.innerHTML = "<h3>Hello</h3>";

// PPROMENA STILOVA
header.style.borderBottom = "solid 3px #000";
