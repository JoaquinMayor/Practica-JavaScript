/*
                     Ejemplos de tipos de datos en JavaScript
*/


//Tipo de dato String
var nombre = "Carlos";
console.log(nombre);
console.log(typeof nombre);

nombre = 10;
console.log(typeof nombre);


//Tipo de dato numerico
var numero = 1000;
console.log(numero);


//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "55443322"
}
console.log(objeto);
console.log(typeof objeto);


//Tipo de dato Boolean
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato función
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol, se usa para crear un valor unico de una variable
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo de dato clase
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);

//Tipo Undefined
var x;
console.log(x);
console.log(typeof x);

//null = ausencia de valor;

var y = null;
console.log(y);
console.log(typeof y);

//Tipo de dato Arreglo
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//Tipo cadena vacia
var z = '';
console.log(z);
console.log(typeof z);

/*
let variable;
const constante = 1;
constante = "Lara";
console.log(constante);*/


x= 10, y = 20;
 z = x+ y;
console.log(z);