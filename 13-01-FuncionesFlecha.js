let miFuncion = function(){
    console.log("saludos desde mi función");
}

miFuncion();

let miFuncionFlecha = () => {console.log("saludos desde mi función flecha");} 

miFuncionFlecha();

//Si es una linea de codigo
const miFuncionFlecha2 = () => console.log("saludos desde mi función flecha");

//Con return
const saludar = () => {
    return "Saludos desde función flacha";
}

console.log(saludar());

//Return de una sola linea
const saludar2 = () =>  "Saludos desde función flacha 2";

console.log(saludar2());

//Regresar un objeto

const regresaObjeto = () => ({nombre: "Juan", apellido: "Lara"});


console.log(regresaObjeto());


//Recibir parametros, si es un parametro se puede omitir el uso de parentesis
const funcionConParametros = mensaje => console.log(mensaje);

funcionConParametros("Saludo con parametros");

const suma = (op1, op2) => op1 + op2;
console.log(suma(2,4));
