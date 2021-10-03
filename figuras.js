console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: '+ladoCuadrado+"cm");


function perimetroCuadrado(lado){
     return lado*4;  
} 

// console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

function areaCuadrado(lado){
 return lado*lado;
}
// console.log("El área del cuadrado es: "+areaCuadrado+" cm2");
console.groupEnd();



//Código triangulo
console.group("Triangulo");
// const ladoTriangulo1=6
// const ladoTriangulo2=6
// const baseTriangulo=4

// console.log(
//     "Los lados del trinagulo miden: "+ladoTriangulo1+"cm, "
//     +ladoTriangulo2+"cm, "
//     +baseTriangulo+"cm");
// const alturaTriangulo=5.5
// console.log("La altura del triangulo es: "+alturaTriangulo+"cm");
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

// const perimetroTriangulo =ladoTriangulo1+ladoTriangulo2+baseTriangulo;
// console.log("El perimetro del triangulo es :"+perimetroTriangulo+"cm");
function areaTriangulo(base, altura){
    return (base * altura)/2
}
// const areaTriangulo=(baseTriangulo*alturaTriangulo)/2
// console.log("El area del triángulo es: "+areaTriangulo+"cm2");
console.groupEnd()



//Código del circulo
console.group("Circulo")
// Radio
// const radioCirculo=4;
// console.log("El radio del circulo es: "+radioCirculo+"cm ");
// Diámetro
function diametroCirculo(radio){
    return radio*2
}
// const diametroCirculo=radioCirculo*2;
// console.log("El diametro del circulo es: "+diametroCirculo+"cm ");
// PI
const PI=Math.PI;
// const PI=3.1415
console.log("Pi es: "+PI);

// Circunferencia
function perimetroCirculo(radio){
const diametro=diametroCirculo(radio);
return diametro*PI;
}
// const perimetroCirculo=diametroCirculo*PI;
// console.log("El perimetro del circulo es: "+perimetroCirculo+"cm ");

//Área
function areaCirculo(radio){
    return (radio*radio)* PI;
}
// const areaCirculo= (radioCirculo*radioCirculo)*PI
// console.log("El área del circulo es: "+areaCirculo+"cm2 ");

console.groupEnd()