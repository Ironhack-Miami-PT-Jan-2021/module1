const mouse = document.getElementById("mouse");

// console.log(mouse);

mouse.style.backgroundColor = "red";
mouse.style.padding = "10px";
mouse.style.height = "20px";

const cats = document.getElementsByClassName("cat");

[...cats].forEach((div) => {
  div.style.border = "5px green solid";
  div.style.padding = "10px";
});

// const body = document.getElementsByTagName("body")[0];

// console.log(body);

const body = document.querySelector("body");

console.log(body);

const catsQA = document.querySelectorAll(".cat");

// catsQA.forEach((cat) => console.log(cat));

// console.log(catsQA);

body.innerHTML += "Weird text";

const cat = document.querySelector(".cat");

if (cat.className.includes("active")) {
  cat.className = "disabled";
} else {
  cat.className = "active";
}

const dogo = document.getElementById("dogo");

dogo.setAttribute("name", "Rex");

const name = dogo.getAttribute("name");

console.log(name);

dogo.removeAttribute("name");
