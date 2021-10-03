console.group("Cuadrado");

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: '+ladoCuadrado+"cm");

const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+"cm");

const areaCuadrado=ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado es: "+areaCuadrado+" cm2");
console.groupEnd();

//Código triangulo
console.group("Triangulo");
const ladoTriangulo1=6
const ladoTriangulo2=6
const baseTriangulo=4

console.log(
    "Los lados del trinagulo miden: "+ladoTriangulo1+"cm, "
    +ladoTriangulo2+"cm, "
    +baseTriangulo+"cm");
const alturaTriangulo=5.5
console.log("La altura del triangulo es: "+alturaTriangulo+"cm");
const perimetroTriangulo =ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es :"+perimetroTriangulo+"cm");
const areaTriangulo=(baseTriangulo*alturaTriangulo)/2
console.log("El area del triángulo es: "+areaTriangulo+"cm2");
console.groupEnd()

//Código del circulo
console.group("Circulo")
// Radio
const radioCirculo=4;
console.log("El radio del circulo es: "+radioCirculo+"cm ");
// Diámetro

const diametroCirculo=radioCirculo*2;
console.log("El diametro del circulo es: "+diametroCirculo+"cm ");
// PI
const PI=Math.PI;
// const PI=3.1415
console.log("Pi es: "+PI);

// Circunferencia
const perimetroCirculo=diametroCirculo*PI;
console.log("El perimetro del circulo es: "+perimetroCirculo+"cm ");

//Área
const areaCirculo= (radioCirculo*radioCirculo)*PI
console.log("El área del circulo es: "+areaCirculo+"cm2 ");

console.groupEnd()