export let links = [];
export let linksAnchors = [];

export function removeElement(position) {
  links = links.filter((link, index) => index !== +position);
  linksAnchors = linksAnchors.filter((link, index) => index !== +position);
  console.log(linksAnchors);
}
