// const list1=[
//     100,
//     200,
//     300,
//     500
// ];

function calcularMediaArimetica(lista) {
  //let sumaLista = 0;
//   for (let i = 0; i < lista.length; i++) {
//     sumaLista = sumaLista + lista[i];
//   }
// array.reduce suma  cada uno de los elementos. Suma el primero con el segundo y el tercero asi susesivamente
/* valorAcumulado = Vamos a recibir valores de cada iteración */

const sumaLista=lista.reduce(
    function(valorAcumulado=0, nuevoElemento){
        return valorAcumulado+nuevoElemento;
    }
)
  const promedioLista = sumaLista  / lista.length;
  return promedioLista
}
