var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDeleteButton(li);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

li.forEach(addDeleteButton);

function addDeleteButton(i){
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	i.appendChild(btn);
	btn.addEventListener("click", handleDelete);
}

function handleDelete(event) {
	var item = event.target.parentNode;
	item.removeChild(event.target);
	ul.removeChild(item);
}

function handleClick(event) {
	if (event.target.nodeName === "LI") {
 	event.target.classList.toggle("done");
 }
}

ul.addEventListener("click", handleClick);

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);