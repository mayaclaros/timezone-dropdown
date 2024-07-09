function showSelectedCountry(event) {
  if (event.target.value === "Sydney") {
    let sydneyTime = moment()
      .tz("Australia/Sydney")
      .format("[It is] dddd, MMMM d, YYYY h:mm a [in Australia / Sydney]");

    alert(sydneyTime);
  }

  if (event.target.value === "Paris") {
    let parisTime = moment()
      .tz("Europe/Paris")
      .format("[It is] dddd, MMMM d, YYYY  h:mm a [in Europe/Paris]");

    alert(parisTime);
  }
  if (event.target.value === "Tokyo") {
    let tokyoTime = moment()
      .tz("Asia/Tokyo")
      .format("[It is] dddd, MMMM d, YYYY h:mm a [in Asia/Tokyo]");

    alert(tokyoTime);
  }
}

let countrySelect = document.querySelector("#country");
countrySelect.addEventListener("change", showSelectedCountry);
