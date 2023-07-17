import Dom from "./Dom.js";
import { links } from "./glovalVariables.js";

export default function initAddLink() {
  const addBtn = document.querySelector("[data-addLink]");

  // Funcão disparada ao clicar no botão "+ Add new link"
  function handleClick() {
    const linksArea = document.querySelector("[data-links]");
    const dom = new Dom();
    linksArea.appendChild(dom.criaLinkConfig("github"));
    if (links.length === 5) {
      addBtn.classList.add("inativo");
    }
  }

  addBtn.addEventListener("click", handleClick);
}
