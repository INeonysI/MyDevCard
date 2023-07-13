import Dom from "./Dom.js";

export default function initAddLink() {
  const addBtn = document.querySelector("[data-addLink]");

  // Funcão disparada ao clicar no botão "+ Add new link"
  function handleClick() {
    const linksArea = document.querySelector("[data-links]");
    const dom = new Dom();
    linksArea.appendChild(dom.criaLinkConfig());
  }

  addBtn.addEventListener("click", handleClick);
}
