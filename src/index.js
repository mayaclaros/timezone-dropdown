function showSelectedCountry(event) {
  if (event.target.value === "Sydney") {
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("[It is] dddd, MMMM d, YYYY [in Australia / Sydney]");

    let sydneyElement = document.querySelector("#Sydney");
    sydneyElement.innerHTML = sydneyTime;

    alert(sydneyTime);
  }

  if (event.target.value === "Paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("[It is] dddd, MMMM d, YYYY [in Europe/Paris]");

    let parisElement = document.querySelector("#Paris");
    parisElement.innerHTML = parisTime;
    alert(parisTime);
  }
  if (event.target.value === "Tokyo") {
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("[It is] dddd, MMMM d, YYYY [in Asia/Tokyo]");

    let tokyoElement = document.querySelector("#Tokyo");
    tokyoElement.innerHTML = tokyoTime;
    alert(tokyoTime);
  }
}

let countrySelect = document.querySelector("#country");
countrySelect.addEventListener("change", showSelectedCountry);
