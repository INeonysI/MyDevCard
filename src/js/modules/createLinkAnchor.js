import Dom from "./Dom.js";
import { linksAnchors } from "./glovalVariables.js";
import socialnetworks from "./socialnetworks.js";

export default function createLinkAnchor(configSection) {
  function createElement(section) {
    const order = section.getAttribute("data-order");
    const networkname = section.getAttribute("data-refers-to");
    const mockup = document.querySelector(".mockup");
    const dom = new Dom();
    const anchor = dom.criaLinkMockup(order, socialnetworks[networkname], "");

    if (linksAnchors[order]) {
      linksAnchors[order].remove();
    }
    linksAnchors[order] = anchor;
    mockup.appendChild(anchor);
  }

  createElement(configSection);

  const mutationObserver = new MutationObserver(() => {
    createElement(configSection);
  });

  mutationObserver.observe(configSection, {
    attributeFilter: ["data-refers-to", "data-order"],
  });
}
