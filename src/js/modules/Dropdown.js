export default class Dropdown {
  constructor(element) {
    this.element = element;
  }

  initDropdown() {
    const dropdownBtn = this.element.querySelector("[data-dropdown=show]");

    function handleClick(elemento) {
      const dropdownContent = elemento.querySelector("[data-dropdown=content]");
      dropdownContent.classList.toggle("active");

      function clickOutside({ target }) {
        const dropdown = elemento.querySelector("[data-dropdown]");

        if (!dropdown.contains(target)) {
          dropdownContent.classList.remove("active");
        }
      }

      window.addEventListener("click", clickOutside);
    }

    dropdownBtn.addEventListener("click", () => {
      handleClick(this.element);
    });
  }
}
