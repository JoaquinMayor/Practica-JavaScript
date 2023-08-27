//Hoisting
miFuncion(4,2);

//Declaración de la función
function miFuncion(a, b){
    console.log("Suma: " + (a+b));
}

//Lamada a la función
miFuncion(2, 5);


function miFuncion1(a, b){
    console.log(arguments.length);
    return a + b;
}

let resultado =  miFuncion1(7,3);
console.log(resultado);

//Declaración de una función del tipo Expresión
let sumar = function(a,b){ return a+b};

resultado =sumar(1,2);
console.log(resultado);

(function(a,b){
    console.log("Ejecutando la función " +(a+b));
})(3,4);

console.log(typeof miFuncion);

let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);

//Funcion de tipo flecha
const sumarFuncionTipoFlacha = (a,b) => a + b;

resultado = sumarFuncionTipoFlacha(3,5);
console.log(resultado);

//Caracteristica argument en funciones
let suma = function(a= 4, b =5){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b + arguments[2];
}

resultado = suma(3,6,7);
console.log(resultado);

resultado = sumarTodo(5, 4, 13, 10, 9,);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i=0; i<arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
}

//Tipo Primitivo
//Paso por Valor
let x = 10;

function cambiarValor(a){
    a = 20;
}

cambiarValor(x);
console.log(x);

//Paso por Referencia, es en los objetos
const persona = {
    nombre: "Juan",
    apellido: "Perez"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Carlos";
    p1.apellido = "Gonsalez";
}

cambiarValorObjeto(persona);

console.log(persona.nombre + " "+ persona.apellido)