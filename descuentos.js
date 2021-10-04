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
  const isCouponValueValid = function (coupon) {
    return coupon.name === couponValue;
};
const userCoupon = coupons.find(isCouponValueValid);
if (!userCoupon) {
    alert("El cupón " + couponValue + "no es válido");
}else{
    const descuento=userCoupon.discount
    const precioConDescuento=calcularPrecioConDescuento(priceValue,descuento)
    
  const resultP1 = document.getElementById("resultP");
  resultP1.innerText = "El precio con descuento son: $" + precioConDescuento;
}

//   if (!coupons.includes(couponValue)){
//     alert("EL cupon"+couponValue+" no es valido")
// } else if (couponValue === "Cupon 1") {
//     descuento = 15;
//  } else if (couponValue === "Cupon 2") {
//     descuento = 30;
//  } else if (couponValue === "Cupon 3") {
//     descuento = 25;
//  }


//   switch (couponValue) {
//     case  coupons[0]: // "JuanDC_es_Batman"

//       descuento = 15;
//       break;
//     case coupons[1]: // "pero_no_le_digas_a_nadie"
//       descuento = 30;
//       break;
//     case coupons[2]: // "es_un_secreto"
//       descuento = 25;
//       break;
//   }
}
// legibilidad, error first y muerte al switch

// const coupons = ["Cupon 1", "Cupon 2", "Cupon 3"]; Array de String
// Array de objetos
const coupons =[
    {
        name:"Cupon 1",
        discount:15

    },
    {
        name:"Cupon 2",
        discount:30
    },
    {
        name:"Cupon 3",
        discount:25
    },

]
