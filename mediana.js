function calcularMediaArimetica(lista) {
   
  
  const sumaLista=lista.reduce(
      function(valorAcumulado=0, nuevoElemento){
          return valorAcumulado+nuevoElemento;
      }
  );
    const promedioLista = sumaLista  / lista.length;
    return promedioLista
  }
  
  function comparar(a, b) {
    return a - b;
  }


const lista1 = [100, 200, 500,800, 4000, 10000,10];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(number1) {
  if (number1 % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let mediana;
//
if (esPar(lista1.length)) {
    const elemento1=lista1[mitadLista1-1];
    const elemento2=lista1[mitadLista1];

    const promedioEle1El2=calcularMediaArimetica([
        elemento1,
        elemento2
    ]);
    mediana=promedioEle1El2
  
} else {
    mediana=lista1.sort(comparar)
  mediana = lista1[mitadLista1];
  
  // posicion mitadLista1 dentro de lista1
}
