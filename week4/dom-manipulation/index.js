console.log("Index.js");

// create the DOM element
const mainTitle = document.createElement("h1");

mainTitle.innerText = "This is a new Title";

// insert an element at the end of a parent
const body = document.querySelector("body");
// body.appendChild(mainTitle);

// add an element before a node
const p = document.getElementsByTagName("p")[0];

body.insertBefore(mainTitle, p);

// innerText innerHTML

const content = document.getElementById("content");

console.log(content.innerHTML);

content.innerHTML += "<p>This is a paragraph</p>";

const addButton = document.getElementById("add-item-button");
const listItemUl = document.getElementById("item-list");

addButton.addEventListener("click", clickEventHandler);

// create and add text to an li
function clickEventHandler() {
  console.log("Button clicked");
  // dom create element
  const li = document.createElement("li");
  // add some text to that li
  //   li.innerText = "I'm an li";
  //   grab value from input field
  const someText = document.getElementById("some-text");
  // console.log(someText.value);
  li.innerText = someText.value;
  listItemUl.appendChild(li);
}

// delete a tag
const googleTag = document.getElementsByTagName("a")[0];

// googleTag.remove();
body.removeChild(googleTag);

// create a delete button;
const deleteButton = document.createElement("button");
deleteButton.innerText = "deleteAnLi";
body.appendChild(deleteButton);

deleteButton.addEventListener("click", function () {
  // delete functionality
  const firstChild = listItemUl.children[0];
  listItemUl.removeChild(firstChild);
});
