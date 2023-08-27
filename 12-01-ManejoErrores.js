"use strict";

try{
    x = 10
    miFuncion();
}catch(error){
    console.log(error);
}finally{
    console.log("termina la revisión de errores");
}

console.log("continuamos...");

let resultado = "hola" ;

function pruebaError(elemento){
    if(isNaN(elemento)){
        throw "no es un numero"
    }
}

try{

    pruebaError(resultado);

}catch(error){
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}