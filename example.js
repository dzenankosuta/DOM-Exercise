let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

form.addEventListener("submit", addItem);

function addItem(event) {
  event.preventDefault();
  let itemName = document.getElementById("item").value;

  let li = document.createElement("li");

  li.className = "list-group-item";

  li.appendChild(document.createTextNode(itemName));

  let deleteBtn = document.createElement("button");

  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  deleteBtn.appendChild(document.createTextNode("X"));

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

itemList.addEventListener("click", removeItem);

function removeItem(event) {
  if (event.target.classList.contains("delete")) {
    if (confirm("Are you sure about deleting?")) {
      let li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

filter.addEventListener("keyup", filterItems);

function filterItems(event) {
  let text = event.target.value.toLowerCase();
  let items = itemList.getElementsByTagName("li");
  Array.from(items).forEach((item) => {
    if (item.firstChild.textContent.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  console.log(items);
}
