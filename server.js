let view1 = document.getElementById("view1");
let view2 = document.getElementById("view2");

let button = document.querySelector(".btn");
let button1 = document.querySelector(".btn1");
button.addEventListener("click", () => {
  view2.style.display = "flex";
  view1.style.display = "none";
});
button1.addEventListener("click", () => {
  view1.style.display = "flex";
  view2.style.display = "none";
});
let classes = document.getElementsByClassName('view')
console.log(classes)
let divs = document.querySelectorAll("div")
let setDivs = document.getElementsByTagName("div")
console.log(setDivs)
console.log(divs) 

// QuerySelecotor and QuerySelectorAll log nodelist to the console, however the other methods like getElementById, or getElementByClassName log html element to the console!
