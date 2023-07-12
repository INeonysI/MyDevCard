export default function initHistory() {
  const links = document.querySelectorAll("[data-history]");

  function replaceContent(newHtml) {
    const oldContent = document.querySelector(".content");

    // Captura o conteúdo da nova página
    const div = document.createElement("div");
    div.innerHTML = newHtml;
    const newContent = div.querySelector(".content");

    // Troca os titulos
    document.title = div.querySelector("title").innerHTML;
    // Troca os conteúdos
    oldContent.innerHTML = newContent.innerHTML;
  }

  async function fetchPage(url) {
    // Retorna o html no tipo texto
    const response = await fetch(url);
    const text = await response.text();

    // Substitui o conteudo da página pelo conteúdo da página de destino.
    replaceContent(text);
  }

  function handleClick(event) {
    // Impede que a página seja redirecionada para o href do botão
    event.preventDefault();
    // Pega o caminho final do href
    const regexp = /([\w]+.html)/gi;
    const { href } = this;
    const path = href.match(regexp);

    // Atualiza a url do site.
    window.history.pushState(null, null, path);
    // Substitui o conteudo da página pelo conteúdo da página de destino.
    fetchPage(href);
  }

  window.addEventListener("popstate", () => {
    fetchPage(window.location.href);
  });

  links.forEach((link) => link.addEventListener("click", handleClick));
}
