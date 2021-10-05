const lista1 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 1, 1, 1, 1, 5];

const lista1Count = {};
/* llenamos lista1Count con metodo map() */
lista1.map(function (element) {
  if (lista1Count[element]) {
    /* si elemento ya existe */

    // lista1Count[element]=lista1Count[element]+1;
    lista1Count[element] += 1;
  } else {
    lista1Count[element] = 1;
  }
});
/* Object.entrie le podemos enviar el objeto 
que queremos convertir en array ejemplo:lista1
y ahora que es array podemos trabajar con .sort
*/
// lista1Array=Object.entries(lista1Count).sort({
// function(valorAcumulado, nuevoValor) {
//     valorAcumulado-nuevoValor/* Valor positivo  caso contrario negativo*/
    
// }
// });
/* funcion.sort */
const lista1Array=Object.entries(lista1Count).sort(
    function(elementA,elementB){
        return elementA[1]-elementB[1];
    });

const moda=lista1Array[lista1Array.length-1];