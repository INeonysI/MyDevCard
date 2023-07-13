export default class Dropdown {
  constructor(element) {
    this.element = element;
  }

  // Inicia a função de dropdown no elemento do construtor
  initDropdown() {
    const { element } = this;
    const dropdownBtn = element.querySelector("[data-dropdown=show]");

    // Função disparada ao clicar no elemento que abre o dropdown.
    function handleClick() {
      const dropdownContent = element.querySelector("[data-dropdown=content]");
      dropdownContent.classList.toggle("active");

      // Função disparada ao clicar na tela. Fecha o dropdown caso o clique não ocorra em um elmento interno ao dropdown.
      function clickOutside({ target }) {
        const dropdown = element.querySelector("[data-dropdown]");

        // Verifica se o click foi dentro do dropdown ou não
        if (!dropdown.contains(target)) {
          dropdownContent.classList.remove("active");
          // Remove o evento de fechar dropdown quando ele for fechado
          window.removeEventListener("click", clickOutside);
        }
      }

      window.addEventListener("click", clickOutside);
    }

    // Adicionar a fução de abrir o dropdown
    dropdownBtn.addEventListener("click", handleClick);
  }
}
