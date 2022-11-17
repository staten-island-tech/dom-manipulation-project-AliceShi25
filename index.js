const DOMSelectors = {
  parent: document.getElementById("parent"),
  inputs: document.querySelector(".inputs"),
  inputbox: document.querySelector(".inputbox"),
  name: document.getElementById("name"),
  message: document.getElementById("message"),
  url: document.getElementById("url"),
  button: document.getElementById("btn"),
};

DOMSelectors.button.addEventListener("click", function () {
  let name = DOMSelectors.name.value;
  let message = DOMSelectors.message.value;
  let url = DOMSelectors.url.value;
  DOMSelectors.button.insertAdjacentHTML(
    "afterend",
    `<div id="coard"> 
    <p class="cardName>From: ${name}</p> 
    <p class="cardImage><img src="${url}" alt="image"> </p> 
    <p class="cardMessage">${message}</p> 
    <button class="cleary">Clear</button> </div>`
  );
  DOMSelectors.name.value = "";
  DOMSelectors.message.value = "";
  DOMSelectors.url.value = "";
});
