const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelector(".point"),
  divbox: document.getElementById("bkg"),
};

function backgroundText(background, text) {
  background.style.backgroundColor = "blue";
  text.innerHTML = "This is text ig";
}

backgroundText(DOMSelectors.divbox, DOMSelectors.point);
