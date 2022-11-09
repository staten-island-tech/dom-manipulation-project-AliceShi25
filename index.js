const DOMSelectors = {
  parent: document.getElementById("parent"),
  input: document.getElementById("input"),
  input2: document.getElementById("input2"),
  url: document.getElementById("url"),
  inputs: document.querySelector(".inputs"),
  button: document.getElementById("btn"),
  button2: document.getElementById("btn2"),
  text: document.querySelector(".text"),
};

// function colorChange(parent, text) {
//   parent.style.backgroundColor = "red";
//   text.style.color = "white";
// }

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.button.insertAdjacentHTML("afterend", `<p>${input}</p>`);
  DOMSelectors.input.value = "";
  let input2 = DOMSelectors.input2.value;
  DOMSelectors.button.insertAdjacentHTML("afterend", `<p>${input2}</p>`);
  DOMSelectors.input2.value = "";
  let url = DOMSelectors.url.value;
  DOMSelectors.button.insertAdjacentHTML("afterend", `<p>${url}</p>`);
  DOMSelectors.url.value = "";
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
