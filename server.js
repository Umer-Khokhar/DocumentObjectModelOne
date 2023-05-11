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
let classes = document.getElementsByClassName("view");
console.log(classes);
let divs = document.querySelectorAll("div");
let setDivs = document.getElementsByTagName("div");
console.log(setDivs);
console.log(divs);
let divEven = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(divEven);

for (i = 0; i < divEven.length; i++) {
  divEven[i].style.backgroundColor = "green";
}

// Selecting and Changing the navbar tiltle
const button3 = document.getElementById("btn3");
button3.addEventListener("click", () => {
  let navtitle = document.querySelector("#nav b");
  navtitle.textContent = "Hello My name is Umer";
});
// QuerySelecotor and QuerySelectorAll log nodelist to the console, however the other methods like getElementById, or getElementByClassName log html (Collection) elements to the console!

//DOM styling
console.log(divEven[1].parentElement) //To Get or access the parent of any of the html tag
console.log(divEven[1].parentElement.children) //To Get or access parent first and then all the childeren of the specific parent(that have me selected or we get)
console.log(divEven[1].parentElement.childNodes) //Same as the childeren but return nodelist wrather then that of html collection
console.log(divEven[0].parentElement.hasChildNodes()) // To check is parent of divEven has nodes as its child
console.log(divEven[0].parentElement.firstChild) //Return the first child as node
console.log(divEven[0].parentElement.firstElementChild) //Return the first child as an Element
console.log(divEven[0].parentElement.lastChild) //Return the last child as a node
console.log(divEven[0].parentElement.lastElementChild) //Return the last child as an Element
console.log(divEven[0].nextSibling) //Return the next node siblings of divEven[0]
console.log(divEven[0].nextElementSibling) //Return the next Element siblings of divEven[0]
console.log(divEven[0].previousSibling) //Return the previous node siblings of divEven[0]
console.log(divEven[0].previousElementSibling) //Return the previous Element siblings of divEven[0]
console.log(divEven[0].nextElementSibling.nextElementSibling) //You can also select nextElementSibling the nextElementSibling

//----Now we Start Styling with DOM
const AllButtons = document.querySelector(".buttons")
//We can add any of the styling to elements by javascript in this way
// AllButtons.style.display = "flex"
AllButtons.style.gap = "1rem"
const myNav = document.querySelector("#nav")
myNav.style.color = "black"