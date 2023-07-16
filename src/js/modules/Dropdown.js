import socialnetworks from "./socialnetworks.js";

export default class Dropdown {
  constructor(element) {
    this.element = element;
  }

  // Inicia a função de dropdown no elemento do construtor
  initDropdown() {
    const item = this.element;
    const innerItem = item.querySelector("div");
    const show = item.querySelector("[data-dropdown=show]");
    const dropdownContent = item.querySelector("[data-dropdown=content]");
    const dropdownItems = item.querySelectorAll("[data-dropdown-item]");
    /* ===================== Abrir e fechar dropdown ===================== */

    // Função disparada ao clicar no elemento que abre o dropdown.
    function openDropdown() {
      dropdownContent.classList.toggle("active");
      // Função disparada ao clicar na tela. Fecha o dropdown caso o clique não ocorra em um elmento interno ao dropdown.
      function clickOutside({ target }) {
        // Verifica se o click foi dentro do dropdown ou não
        if (!innerItem.contains(target)) {
          dropdownContent.classList.remove("active");
          // Remove o evento de fechar dropdown quando ele for fechado
          window.removeEventListener("click", clickOutside);
        }
      }

      window.addEventListener("click", clickOutside);
    }

    // Adicionar a fução de abrir o dropdown
    show.addEventListener("click", openDropdown);

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
      innerItem.parentElement.dataset.refersTo = this.dataset.dropdownItem;

      show.innerHTML = `
        <div class="side flex Body-M items-center gap-1">
          ${img}
          ${name}
        </div>
        <img src="./assets/images/icon-chevron-down.svg" alt="" />
      `;
    }

    dropdownItems.forEach((dpItem) => {
      dpItem.addEventListener("click", trocarHeader);
    });
  }
}
