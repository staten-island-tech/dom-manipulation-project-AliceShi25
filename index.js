const DOMSelectors = {
  parent: document.getElementById("parent"),
  // inputs: document.querySelector(".inputs"),
  inputs: document.querySelector(".inputs"),
  inputbox: document.querySelector(".inputbox"),
  input1: document.getElementById("input1"),
  input2: document.getElementById("input2"),
  url: document.getElementById("url"),
  button: document.getElementById("btn"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input1 = DOMSelectors.input1.value;
  let input2 = DOMSelectors.input2.value;
  let url = DOMSelectors.url.value;
  DOMSelectors.button.insertAdjacentHTML(
    "afterend",
    `<div id="die"><p>${input1} ${input2} ${url} </p></div>`
  );
  DOMSelectors.input1.value = "";
  DOMSelectors.input2.value = "";
  DOMSelectors.url.value = "";
});
