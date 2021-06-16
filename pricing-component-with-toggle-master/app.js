const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const masterPrice = document.querySelector(".master-price");
const checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener("change", (e) => {
  if (e.target.checked) {
    basicPrice.innerHTML = "&dollar;19.99";
    professionalPrice.innerHTML = "&dollar;24.99";
    masterPrice.innerHTML = "&dollar;39.99";
  } else {
    basicPrice.innerHTML = "&dollar;199.99";
    professionalPrice.innerHTML = "&dollar;249.99";
    masterPrice.innerHTML = "&dollar;399.99";
  }
});
