const BASE_URL =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const fromCur = document.querySelector(".from select");
const toCur = document.querySelector(".to select");

const msg = document.querySelector(".message");

for (let select of dropdowns) {
  for (code in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = code;
    newOption.value = code;
    if (select.name === "from" && code === "USD") {
      newOption.selected = "selected";
    } else if (select.name == "to" && code == "BDT") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    flagChange(evt.target);
  });
}

const flagChange = (element) => {
  let code = element.value;
  let countCode = countryList[code];
  let newSrc = `https://flagsapi.com/${countCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amountVal = amount.value;
  console.log(amountVal);
  if (amountVal === "" || amountVal < 1) {
    amountVal = 1;
    amount.value = "1";
  }

  const URL = `${BASE_URL}/${fromCur.value.toLowerCase()}.json`;

  let response = await fetch(URL);
  let data = await response.json();
  let rate = data[fromCur.value.toLowerCase()][toCur.value.toLowerCase()];
  //   console.log(rate);
  //   console.log(amountVal);
  let finalAmount = amountVal * rate;
  msg.innerText = `${amountVal} ${fromCur.value} = ${finalAmount}${toCur.value}`;
});
