let currencyPlnElement = document.querySelector(".js-currencyPln");
let formElement = document.querySelector(".js-form");
let eurElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let pln = currencyPlnElement.value;
  let currencyEurElement = 0.21;
  let eur = pln * currencyEurElement;

  eurElement.innerText = `${pln} PLN to ${eur.toFixed(2)} EUR`;
});
