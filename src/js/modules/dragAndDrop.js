let indexSelected;

function swapItems(fromIndex, toIndex) {
  const itemOneContainer = document.querySelector(
    `[data-order='${fromIndex}']`
  );
  const itemTwoContainer = document.querySelector(`[data-order='${toIndex}']`);
  const itemOne = document.querySelector(`[data-order='${fromIndex}'] div`);
  const itemTwo = document.querySelector(`[data-order='${toIndex}'] div`);

  itemOneContainer.appendChild(itemTwo);
  itemTwoContainer.appendChild(itemOne);
}

function dragStart(event) {
  console.log("Start");
  indexSelected = +this.closest("div").getAttribute("data-order");
  console.log(indexSelected);
}
function dragOver(event) {
  event.preventDefault();
}
function dragEnter(event) {
  console.log("enter");
  this.classList.remove("bg-c7");
  this.classList.add("bg-c6");
}
function dragLeave(event) {
  console.log("leave");
  this.classList.add("bg-c7");
  this.classList.remove("bg-c6");
}
function dragDrop(event) {
  const indexDestiny = +this.getAttribute("data-order");
  this.classList.add("bg-c7");
  this.classList.remove("bg-c6");

  swapItems(indexSelected, indexDestiny);
}

export default function drag(element) {
  element.addEventListener("dragstart", dragStart);
  element.addEventListener("dragover", dragOver);
  element.addEventListener("dragleave", dragLeave);
  element.addEventListener("dragenter", dragEnter);
  element.addEventListener("drop", dragDrop);
}
