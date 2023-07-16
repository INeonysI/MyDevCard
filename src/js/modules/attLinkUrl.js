import validaURL from "./validacao.js";

export default function attLinkUrl(elemento) {
  const input = elemento.querySelector("input");
  const message = elemento.querySelector("[data-error-message");

  function handleFocusOut() {
    const valido = validaURL(this.value);
    if (!valido) {
      input.classList.add("invalido");
      message.innerHTML = "Please check again";
    }
  }

  function handleInput() {
    const valido = validaURL(this.value);
    if (valido) {
      input.classList.remove("invalido");
      message.innerHTML = "";

      const order = elemento.getAttribute("data-order");
      const mockupItens = document.querySelectorAll(".mockup-item");
      mockupItens[order].setAttribute("href", this.value);
    }
  }

  input.addEventListener("focusout", handleFocusOut);
  input.addEventListener("input", handleInput);
}
