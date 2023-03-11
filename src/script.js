const resultText = (amount, currency, result) => {
  const resultElement = document.querySelector(".js-result");
  resultElement.innerHTML = `${amount.toFixed(
    2
  )} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>
`;
};

const convert = (amount, currency) => {
  const EUR = 4.68;
  const GBP = 5.29;
  const USD = 4.4;
  switch (currency) {
    case "EUR":
      return amount / EUR;
    case "GBP":
      return amount / GBP;
    case "USD":
      return amount / USD;
  }
};

const onFormSubmit = (event) => {
  event.preventDefault();
  const amountElement = document.querySelector(".js-currencyPln");
  const currencyElement = document.querySelector(".js-form__select");
  let amount = +amountElement.value;
  let currency = currencyElement.value;
  let result = convert(amount, currency);
  resultText(amount, currency, result);
};

const handleSubmit = () => {
  const formElement = document.querySelector(".js-form");
  formElement.addEventListener("submit", onFormSubmit);
};

handleSubmit();
