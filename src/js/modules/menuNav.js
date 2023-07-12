export default function initMenuNavigation() {
  const links = document.querySelectorAll("[data-history]");

  function handleClick() {
    const atual = document.querySelector("[data-history=selected]");
    atual.dataset.history = "";
    atual.classList.remove("bg-c3", "text-c1");

    this.classList.add("bg-c3", "text-c1");
    this.dataset.history = "selected";
  }

  links.forEach((link) => link.addEventListener("click", handleClick));
}
