function showSelectedCountry(event) {
  if (event.target.value === "Sydney") {
    alert();
  }
  if (event.target.value === "Paris") {
    alert();
  }
  if (event.target.value === "Tokyo") {
    alert();
  }
}
let countrySelect = document.querySelector("#country");
countrySelect.addEventListener("change", showSelectedCountry);
