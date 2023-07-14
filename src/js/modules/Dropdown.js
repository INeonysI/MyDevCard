import Dom from "./Dom.js";
import socialnetworks from "./socialnetworks.js";

export default class Dropdown {
  constructor(element) {
    this.element = element;
  }

  // Inicia a função de dropdown no elemento do construtor
  initDropdown() {
    const item = this.element;
    const show = item.querySelector("[data-dropdown=show]");
    const dropdownContent = item.querySelector("[data-dropdown=content]");
    const dropdownItems = item.querySelectorAll("[data-dropdown-item]");
    /* ===================== Abrir e fechar dropdown ===================== */
    const { element } = this;

    // Função disparada ao clicar no elemento que abre o dropdown.
    function handleClick() {
      dropdownContent.classList.toggle("active");
      // Função disparada ao clicar na tela. Fecha o dropdown caso o clique não ocorra em um elmento interno ao dropdown.
      function clickOutside({ target }) {
        // Verifica se o click foi dentro do dropdown ou não
        if (!item.contains(target)) {
          dropdownContent.classList.remove("active");
          // Remove o evento de fechar dropdown quando ele for fechado
          window.removeEventListener("click", clickOutside);
        }
      }

      window.addEventListener("click", clickOutside);
    }

    // Adicionar a fução de abrir o dropdown
    show.addEventListener("click", handleClick);

    /* =================== Trocar elemento selecionado =================== */

    function trocarHeader() {
      const rede = socialnetworks[this.dataset.dropdownItem];
      const { name, img } = rede;
      const selectedBefore = item.querySelector(".selected");

      // Remove os estilos da opção anterior
      if (selectedBefore) {
        selectedBefore.classList.remove("selected");
      }

      this.classList.add("selected");
      item.dataset.refersTo = this.dataset.dropdownItem;

      show.innerHTML = `
        <div class="side flex Body-M items-center gap-1">
          ${img}
          ${name}
        </div>
        <img src="./assets/images/icon-chevron-down.svg" alt="" />
      `;

      const mockup = document.querySelector(".mockup");
      const dom = new Dom();
      const link = dom.criaLinkMockup(element.dataset.order, rede, "");

      mockup.appendChild(link);
    }

    dropdownItems.forEach((item) => {
      item.addEventListener("click", trocarHeader);
    });
  }
}
