/* Nueva lista solo con salario */


function esPar(numer1){

    return (numer1%2===0);
    // if(numer1%2===0){
    //     return true
    // }else{
    //      turn false
    // }
};

function calcularMediaArimetica(lista) {
   
  
    const sumaLista=lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
      const promedioLista = sumaLista  / lista.length;
      return promedioLista
    }

    /* funcion que recibe una lista */
function medianaSalarios(lista){

    const mitad=parseInt(lista.length / 2)
    if(esPar(lista.lenght)){
        /* si es par */
        const personMitad1=lista[mitad-1];
        const personMitad2=lista[mitad];

        const mediana=calcularMediaArimetica([personMitad1,personMitad2]);
        return mediana;
    } else{
        const personMitad=lista[mitad];
        return personMitad;
    }

}
//Media general
const salariosCol=colombia.map(
    function(person1){
        return person1.salary;
    }
);

const salariosColSorted=salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);
console.log(medianaSalarios(salariosColSorted));

 const medianaGeneralCol=medianaSalarios(salariosColSorted)


// console.log( medianaSalariosCol(salariosColSorted));