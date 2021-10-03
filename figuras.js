console.group("Cuadrado");

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
function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}


function areaTriangulo(base, altura){
    return (base * altura)/2
}
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

/* Aquí interactuamos con el Html */
function calcularPerimetroCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area)
}

function calcularPerimetroTriangulo(){
    const input=document.getElementById("Inputlado1");
    const input1=document.getElementById("Inputlado2");
    const input2=document.getElementById("Inputbase");
    const value0 = Number(input.value);
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    const perimetrot = perimetroTriangulo(value0, value1, value2);
    alert(perimetrot);
}

function calcularAreaTriangulo(){

    const input=document.getElementById("Inputlado1")
    const input1=document.getElementById("Inputbase")
    const value = input.value;
    const value1 = input1.value;
    const area = areaTriangulo(value, value1)
    alert("El area es "+area)
}

function comprobarIfIsoceles(lado1, lado2){
    if(lado1===lado2){
        return true;
     }


}
function calcularAltura(){
 
    const input=document.getElementById("inputlado1");
    const input1=document.getElementById("inputlado2");
    const input2=document.getElementById("inputbase");
    const lad1 = Number(input.value);
    const lad2 = Number(input1.value);
    const bas = Number(input2.value);
    if(comprobarIfIsoceles(lad1,lad2)){
     const altura=Math.sqrt((lad1*lad1)-(bas*bas)/4)
     alert("La altuta es: "+altura)
 }else{
     alert("El lado 1 y 2 deben ser iguales")
 }
}