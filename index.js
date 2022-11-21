const DOMSelectors = {
  form: document.getElementById("form"),
  inputs: document.querySelector(".inputs"),
  text: document.querySelector(".text"),
  textbox: document.querySelector(".textbox"),
  name: document.getElementById("name"),
  message: document.getElementById("message"),
  img: document.getElementById("img"),
  button: document.querySelector(".btn"),
  display: document.getElementById("display"),
  clear: document.querySelectorAll(".clear"),
};

function create() {
  let card = {};
  card.name = DOMSelectors.name.value;
  card.img = DOMSelectors.img.value;
  card.message = DOMSelectors.message.value;
  DOMSelectors.button.insertAdjacentHTML(
    `afterend`,
    `<div class="coard">
      <p>From: ${card.name}</p>
      <p><img src= "${card.img}"/></p>
      <p>${card.message}</p>
       <button class="clear">Clear</button>
  </div>`
  );
}

function none() {
  DOMSelectors.name.value = "";
  DOMSelectors.img.value = "";
  DOMSelectors.message.value = "";
}

function clear() {
  let clear = document.querySelectorAll(".clear");
  clear.forEach((node) => {
    node.addEventListener("click", function (addCard) {
      addCard.target.parentElement.remove();
    });
  });
}

DOMSelectors.form.addEventListener("submit", function (addCard) {
  addCard.preventDefault();
  create();
  none();
  clear();
});
