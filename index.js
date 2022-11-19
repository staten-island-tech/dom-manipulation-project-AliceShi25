const DOMSelectors = {
  formparent: document.querySelector(".formparent"),
  form: document.getElementById("form"),
  forminputs: document.querySelector(".form-inputs"),
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

DOMSelectors.form.addEventListener("submit", function (a) {
  a.preventDefault();
  let card = {};
  card.name = DOMSelectors.name.value;
  card.img = DOMSelectors.img.value;
  card.message = DOMSelectors.message.value;
  type();
  clear();
  function type() {
    DOMSelectors.button.insertAdjacentHTML(
      `afterend`,
      `<div class="coard">
      <p>From: ${card.name}</p>
      <p><img src= "${card.img}"/></p>
      <p>${card.message}</p>
       <button class="clear">Clear</button>
  </div>`
    );
    DOMSelectors.name.value = "";
    DOMSelectors.img.value = "";
    DOMSelectors.message.value = "";
  }
  function clear() {
    let clear = document.querySelectorAll(".clear");
    clear.forEach((node) => {
      node.addEventListener("click", function (a) {
        a.target.parentElement.remove();
      });
    });
  }
});
