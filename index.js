const DOMSelectors = {
  parent: document.getElementById("parent"),
  inputdiv: document.querySelector(".inputdiv"),
  input: document.querySelector(".input"),
  button: document.querySelector(".button"),
  text: document.querySelector(".text"),
};

function colorChange(parent, text) {
  parent.style.backgroundColor = "red";
  text.style.color = "white";
}
DOMSelectors.button.addEventListener("click", function () {
  colorChange(DOMSelectors.parent, DOMSelectors.text);
  let input = DOMSelectors.input.value;
  console.log(input);
  DOMSelectors.button.insertAdjacentHTML("afterend", `${input}`);
});

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
