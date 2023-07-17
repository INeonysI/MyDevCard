import { links, linksAnchors, removeElement } from "./glovalVariables.js";

export default function initDeleteLink(elemento) {
  const deleteBtn = elemento.querySelector("[data-delete]");

  function handleClick() {
    const order =
      this.parentElement.parentElement.parentElement.getAttribute("data-order");
    console.log(order);
    links[order].remove();
    linksAnchors[order].remove();
    removeElement(order);

    linksAnchors.forEach((link, index) => {
      link.style.top = `${278 + index * 64}px`;
    });

    links.forEach((link, index) => {
      link.setAttribute("data-order", index);
      link.querySelector(".order").innerHTML = index;
    });

    document.querySelector("[data-addLink]").classList.remove("inativo");
  }

  deleteBtn.addEventListener("click", handleClick);
}
