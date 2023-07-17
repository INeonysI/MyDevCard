import Dropdown from "./Dropdown.js";
import socialnetworks from "./socialnetworks.js";
import drag from "./dragAndDrop.js";
import { links } from "./glovalVariables.js";
import createLinkAnchor from "./createLinkAnchor.js";
import attLinkUrl from "./attLinkUrl.js";
import initDeleteLink from "./deleteLink.js";

// Retorna o HTML dos itens do dropdown
function getDropdownItems() {
  const redes = Object.values(socialnetworks).map(
    (value) =>
      `<div class="dropdown-item flex Body-M items-center gap-1" data-dropdown-item="${value.name
        .replace(/[^a-zA-Z]/g, "")
        .toLowerCase()}">${value.img} ${value.name}</div>`
  );

  return redes.join("");
}

export default class Dom {
  // Retorna um card para a seleção de links que serão adicionados ao card.
  criaLinkConfig(networkname) {
    const element = document.createElement("div");
    // Adiciona as classes e datasets do elemento
    element.classList.add(
      "links-config-item",
      "flex-1",
      "min-h-[200px]",
      "draggable",
      "bg-c7"
    );
    element.setAttribute(
      "data-order",
      document.querySelectorAll(".links-config-item").length
    );
    element.setAttribute("data-refers-to", networkname);
    element.setAttribute("draggable", true);

    // HTML do card
    element.innerHTML = `
<div class="p-5 rounded-xl">
    <div
    class="links-config-item-header flex justify-between items-center"
    >
        <div class="side flex items-center gap-1">
            <img src="./assets/images/icon-drag-and-drop.svg" alt="" dragabble='false' class="cursor-pointer p-1"/>
            <h3 class="Heading-S text-c5">Item #<span class="order">${
              document.querySelectorAll(".links-config-item").length
            }</span>
            <h3>
        </div>
    <span class="Body-M text-c5 uppercase cursor-pointer" data-delete>Remove</span>
    </div>
    <div class="links-config-item-dropdown" data-dropdown>
    <span class="Body-S text-c4">plataform</span>
        <div
        class="dropdown-show flex justify-between items-center"
        data-dropdown="show"
        >
            <div class="side flex Body-M items-center gap-1">
                ${socialnetworks[networkname].img}
                ${socialnetworks[networkname].name}
            </div>
            <img src="./assets/images/icon-chevron-down.svg" alt="" />
        </div>
        <div class="dropdown-content" data-dropdown="content">
            ${getDropdownItems()}
        </div>
    </div>
    <div class="teste">
        <span class="Body-S text-c4 block">Link</span>
        <div class="flex items-center">
            <img
            class="absolute icone-input"
            src="./assets/images/icon-link.svg"
            alt=""
            />
            <input
            type="text"
            class="text-field w-full pl-10"
            placeholder="Insert your link"
            />
            <span data-error-message class="absolute message-error"></span>
        </div>
    </div>
</div>
    `;

    links.push(element);
    // Inicia a funcionalidade de menu dropdown no elemento
    const dp = new Dropdown(element);
    dp.initDropdown();
    // Inicia funcionalidade de drag and drop
    drag(element);

    // Cria o link do mockup
    createLinkAnchor(element);

    // Adiciona função de apagar link
    initDeleteLink(element);

    // Atualiza
    attLinkUrl(element);

    return element;
  }

  // Retorna um card de link no mockup
  criaLinkMockup(position, rede, url) {
    const element = document.createElement("a");
    element.classList.add("mockup-item");
    element.style.backgroundColor = rede.bg;
    element.style.color = rede.color;
    element.style.top = `${278 + position * 64}px`;
    element.href = url;
    element.setAttribute("target", "_blank");

    element.innerHTML = `
      <div class="flex items-center gap-1">
        ${rede.img}
        ${rede.name}
      </div>
      <img src="./assets/images/icon-arrow-right.svg" alt=""/>
    `;

    return element;
  }

  /* atualizaPagina() {
    const linksArea = document.querySelector("[data-links]");
    const mockup = document.querySelector(".mockup");
    
    links.forEach(link => this.criaLinkConfig(link.getAttribute("data-refers-to")]))
  }  */
}
