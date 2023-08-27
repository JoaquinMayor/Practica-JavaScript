//Ejemplo AND (&&)
let a = 5;
let valMin = 0, valMax = 10;

if(a >= valMin && a<= valMax){
    console.log("Dentro de Rango");
}else{
    console.log("Fuera de rango");
}


//Ejemplo OR (||)
let vacaciones = false, diaDescanso = false;

if(vacaciones || diaDescanso){
    console.log("El Padre puede asistir al juego del hijo");
}else{
    console.log("El padre esta ocupado");
}

//Operador ternario, consta de 3 partes tiene la expresion de tipo booleano, es como un if else, si se cumple lo anterior al ? retorna lo primero, sino lo segundo
let resultado = (3>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 9;
resultado = numero % 2 == 0 ? "Número par" : "Número impar";
console.log(resultado);

//Conversion de tipos
let miNumero = "18";

console.log(miNumero);
console.log(typeof miNumero);

let edad = Number(miNumero);
console.log(typeof edad);

if(edad >= 18){
    console.log("Puede votar");
}else{
    console.log("Muy joven para votar");
}

let mayorEdad = edad>=18 ? "Puede Votar" : "Muy joven para votar";

console.log(mayorEdad);

// NaN Not a Number (Cuando no se puede combertir a un número)
miNumero = "18X";
edad = Number(miNumero);
console.log(edad);

if(isNaN(edad)){
    console.log("No es un número");
}else{
    let mayorEdad = edad>=18 ? "Puede Votar" : "Muy joven para votar";
    console.log(mayorEdad);
}

//Presedencia de operadores
let x  = 5;
let y = 10;
let z = ++x + y--;
console.log(z);

resultado = 4 + 5 *6 /3;
console.log(resultado);

resultado = (4+5) * 6 /3;
console.log(resultado);