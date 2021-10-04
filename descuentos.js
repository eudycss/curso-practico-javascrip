// const precioOriginal=120;
// const descuento=18;

function calcularPrecioConDescuento(precio,descuento){

    const porcentajePrecioConDescuento=100-descuento;
    const precioConDescuento=(precio*porcentajePrecioConDescuento)/100
    return precioConDescuento

}
// console.log("El precio original es: "+precioOriginal);
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// });
