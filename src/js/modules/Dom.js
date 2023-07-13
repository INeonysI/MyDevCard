import Dropdown from "./Dropdown.js";
import socialnetworks from "./socialnetworks.js";

export default class Dom {
  criaLinkConfig() {
    const element = document.createElement("div");

    function getDropdownItems() {
      const redes = Object.values(socialnetworks).map(
        (value) =>
          `<div class="dropdown-item flex Body-M items-center gap-1"><img src="${value.path}" alt="" />${value.name}</div>`
      );

      return redes.join("");
    }

    element.classList.add("links-config", "flex-1", "min-h-[200px]");

    element.innerHTML = `
    
    <div
      class="links-config-item flex flex-col gap-3 bg-c7 p-5 rounded-xl -z-10"
    >
    <div
      class="links-config-item-header flex justify-between items-center"
    >
      <div class="side flex items-center gap-1">
        <img src="./assets/images/icon-drag-and-drop.svg" alt="" />
        <h3 class="Heading-S text-c5">Item #1</h3>
      </div>
      <span class="Body-M text-c5 capitalize">Remove</span>
    </div>
    <div class="links-config-item-dropdown" data-dropdown>
      <span class="Body-S text-c4">plataform</span>
      <div
        class="dropdown-show flex justify-between items-center"
        data-dropdown="show"
      >
        <div class="side flex Body-M items-center gap-1">
          <img src="./assets/images/icon-github.svg" alt="" />
          GitHub
        </div>
        <img src="./assets/images/icon-chevron-down.svg" alt="" />
      </div>
      <div class="dropdown-content" data-dropdown="content">
          ${getDropdownItems()}
      </div>
    </div>
    <div class="-z-10">
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
      </div>
    </div>
  </div>
    `;

    const dp = new Dropdown(element);
    dp.initDropdown();

    return element;
  }
}
