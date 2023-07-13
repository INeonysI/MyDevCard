export default function initMenuNavigation() {
  const links = document.querySelectorAll("[data-history]");

  // Funcão dispara ao clicar em um botão do header
  function handleClick() {
    // Retira os estilos da seção anterior
    const atual = document.querySelector("[data-history=selected]");
    atual.dataset.history = "";
    atual.classList.remove("bg-c3", "text-c1");

    // Adiciona os estilos na nova
    this.classList.add("bg-c3", "text-c1");
    this.dataset.history = "selected";
  }

  // Atualiza os estilos dos botões do header
  links.forEach((link) => link.addEventListener("click", handleClick));
}
