import { links, linksAnchors } from "./glovalVariables.js";

let indexSelected;

function swapItems(fromIndex, toIndex) {
  const itemOne = links[fromIndex].querySelector(
    `[data-order='${fromIndex}'] div`
  );
  const itemTwo = links[toIndex].querySelector(`[data-order='${toIndex}'] div`);

  links[fromIndex].appendChild(itemTwo);
  itemTwo.querySelector(".order").innerHTML = fromIndex;
  links[toIndex].appendChild(itemOne);
  itemOne.querySelector(".order").innerHTML = toIndex;

  const aux = links[fromIndex].getAttribute("data-refers-to");
  links[fromIndex].setAttribute(
    "data-refers-to",
    links[toIndex].getAttribute("data-refers-to")
  );
  links[toIndex].setAttribute("data-refers-to", aux);
}

function dragStart() {
  indexSelected = +this.closest("div").getAttribute("data-order");
}
function dragOver(event) {
  event.preventDefault();

  const order = this.getAttribute("data-order");
  linksAnchors[order].style.left = "45px";
}
function dragEnter() {
  this.classList.remove("bg-c7");
  this.classList.add("bg-c6");
}
function dragLeave() {
  this.classList.add("bg-c7");
  this.classList.remove("bg-c6");

  const order = this.getAttribute("data-order");
  linksAnchors[order].style.left = "35px";
}
function dragDrop() {
  const indexDestiny = +this.getAttribute("data-order");
  this.classList.add("bg-c7");
  this.classList.remove("bg-c6");

  linksAnchors[indexDestiny].style.left = "35px";

  swapItems(indexSelected, indexDestiny);
}

export default function drag(element) {
  element.addEventListener("dragstart", dragStart);
  element.addEventListener("dragover", dragOver);
  element.addEventListener("dragleave", dragLeave);
  element.addEventListener("dragenter", dragEnter);
  element.addEventListener("drop", dragDrop);
}
