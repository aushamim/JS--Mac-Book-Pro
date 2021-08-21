//Promo
function promo() {
  const promoField = document.getElementById("promo-field");
  const priceFinal = document.getElementById("grand-total-price");
  const totalPrice = document.getElementById("total-price");
  const discount = (parseInt(totalPrice.innerHTML) / 100) * 20;
  if (promoField.value == "stevekaku") {
    const grandTotal = parseInt(totalPrice.innerHTML) - discount;
    priceFinal.innerHTML = grandTotal;
  }
  promoField.value = "";
}

//Total Price
function totalPrice() {
  const memoryCost = parseInt(document.getElementById("memory-cost").innerText);
  const storageCost = parseInt(
    document.getElementById("storage-cost").innerText
  );
  const deliveryCost = parseInt(
    document.getElementById("delivery-cost").innerText
  );
  const totalPriceField = document.getElementById("total-price");
  const totalPrice = 1299 + memoryCost + storageCost + deliveryCost;
  totalPriceField.innerHTML = totalPrice;
  const grandTotal = document.getElementById("grand-total-price");
  grandTotal.innerHTML = totalPrice;
}

//Adding Extra Price
function priceAdd(cartID, price) {
  const oldCost = document.getElementById(cartID);
  oldCost.innerHTML = price;
  totalPrice();
  return oldCost;
}

//Event listener
function buttonClick(btnID, cartID, price) {
  document.getElementById(btnID).addEventListener("click", function () {
    priceAdd(cartID, price);
  });
}

//Button click
buttonClick("memorybtn-1", "memory-cost", 0);
buttonClick("memorybtn-2", "memory-cost", 180);
buttonClick("storagebtn-1", "storage-cost", 0);
buttonClick("storagebtn-2", "storage-cost", 100);
buttonClick("storagebtn-3", "storage-cost", 180);
buttonClick("deliverybtn-1", "delivery-cost", 0);
buttonClick("deliverybtn-2", "delivery-cost", 20);

document.getElementById("promo-btn").addEventListener("click", function () {
  promo();
});
