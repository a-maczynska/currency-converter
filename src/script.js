function change() {
  const currencyPlnElement = document.querySelector(".js-currencyPln");
  const eurElement = document.querySelector(".js-result");
  const pln = currencyPlnElement.value;
  const currencyEurElement = 0.21;
  const eur = pln * currencyEurElement;

  return (eurElement.innerText = `${pln} PLN to ${eur.toFixed(2)} EUR`);
}
const formElement = document.querySelector(".js-form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  change();
});
