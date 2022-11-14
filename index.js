const DOMSelectors = {
  parent: document.getElementById("parent"),
  inputs: document.querySelector(".inputs"),
  input: document.querySelector(".input"),
  inputbox: document.querySelector(".inputbox"),
  input1: document.getElementById("input1"),
  input2: document.getElementById("input2"),
  url: document.getElementById("url"),
  button: document.getElementById("btn"),
};

// function colorChange(parent, text) {
//   parent.style.backgroundColor = "red";
//   text.style.color = "white";
// }

DOMSelectors.button.addEventListener("click", function () {
  let input1 = DOMSelectors.input1.value;
  DOMSelectors.button.insertAdjacentHTML("afterend", `<p>${input1}</p>`);
  DOMSelectors.input1.value = "";
});

// DOMSelectors.button2.addEventListener("click", function () {
//   let input = DOMSelectors.text.value;
//   DOMSelectors.text.value = "";
// });

// DOMSelectors.button.insertAdjacentHTML("afterend", `<h1>"hi"</h1>`);

// when click button, function in bkgtxt happens
// nodelist
// const qsa = (els) => document.querySelectorAll(els);
// const allPoint = qsa(".point");
// console.log(allPoint);

// const allPointArray = Array.from(allPoint);
// const oPoint = allPointArray.filter((node) => {
//   if (node.classList[1] === "one") {
//     return true;
//   }
//   return false;
// });

// console.log(oPoint);
