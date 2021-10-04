// const precioOriginal=120;
// const descuento=18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  // const inputDiscount = document.getElementById("InputDiscount")
  // const discountValue=inputDiscount.value
  const inputCoupon = document.getElementById("InputCoupon");
  const couponValue = inputCoupon.value;

  let descuento;

  switch (couponValue) {
    case  coupons[0]: // "JuanDC_es_Batman"
      descuento = 15;
      break;
    case coupons[1]: // "pero_no_le_digas_a_nadie"
      descuento = 30;
      break;
    case coupons[2]: // "es_un_secreto"
      descuento = 25;
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    descuento
  );
  const resultP1 = document.getElementById("resultP");
  resultP1.innerText = "El precio con descuento son: $" + precioConDescuento;
}

const coupons = ["Cupon 1", "Cupon 2", "Cupon 3"];
