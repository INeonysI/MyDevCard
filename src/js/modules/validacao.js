export default function validaURL(valor) {
  if (valor.length === 0) {
    return false;
  }
  const regexp = /https:\/\/[\w./?=-\d]+/gi;
  return regexp.test(valor);
}
