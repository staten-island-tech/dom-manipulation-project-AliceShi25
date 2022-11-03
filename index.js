const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  point: document.querySelector(".point"),
  divbox: document.getElementById("bkg"),
};

function backgroundText(background, text) {
  background.style.backgroundColor = "blue";
  text.textContent = "ew";
  text.style.fontSize = "40px";
}
DOMSelectors.button.addEventListener("click", function () {
  backgroundText(DOMSelectors.divbox, DOMSelectors.text);
});
//when click button, function in bkgtxt happens
/*/ nodelist
const qsa = (els) => document.querySelectorAll(els);
const allPoint = qsa(".point");
console.log(allPoint);

const allPointArray = Array.from(allPoint);
const oPoint = allPointArray.filter((node) => {
  if (node.classList[1] === "one") {
    return true;
  }
  return false;
});

console.log(oPoint);/*/
