let persona = {
    nombre: "Juan",
    apellido: "Perez",
    emai: "jperez@gmail.com",
    edad: 28,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    nombreCompleto: function(){
        return this.nombre + " "+ this.apellido;
    },
    get nombreCompletoGet(){
        return this.nombre + " "+ this.apellido;
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.lang);


console.log(persona);

console.log(persona.nombreCompleto());
//Se puede acceder a a tributos con [nombre del atributo]
console.log(persona["apellido"]);

//Llamada de metodo set
persona.lang = "en";
console.log(persona.idioma);

//For in Recorrer propiedades del objeto
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}


//Agregar atributo
persona.tel = "55443322";
console.log(persona.tel);
//Eliminar propiedad
delete persona.tel

//Otra forma de crear un objeto de manera dinamica
let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Saturno 15";
persona2.tel = "55443322";
console.log(persona2.tel);

//Mandar imprimir objeto concatenando cada valor de cada propiedad
console.log(persona.nombre + ", " + persona.apellido);

//Iterar propiedades for in

for(propiedad in persona){
    console.log(persona[propiedad]);
}

// Retornar un objeto como un arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

//String JSON
let personaString = JSON.stringify(persona);
console.log(personaString);

//Metodos get y set
console.log(persona.nombreCompletoGet);


//Contructores
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.emai = email;

    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Lucas", "White", "lucas@gmail.com");
console.log(padre);

let madre = new Persona("Maria", "Gosalez", "maria@gmail.com");
console.log(madre);

console.log(padre.nombreCompleto());

//Agregar propiedades a todos los objetos ya creados
Persona.prototype.tel = "44332211";
console.log(padre.tel);
console.log(madre.tel);

//Llamar metodos de otro objeto a este con Call

let persona1 = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + " "+ tel;
    },
    nombreCompleto2: function(){
        return  this.nombre + " " + this.apellido ;
    }
}

let persona3 = {
    nombre: "Juan",
    apellido: "Lara"
}

console.log(persona1.nombreCompleto.call(persona3));
console.log(persona1.nombreCompleto.call(persona3, "Ing", "5544332211"));

//Uso de Apply los argumentos se pasan en un arreglo
let arreglo = ["Ing","55443322"];
console.log(persona1.nombreCompleto2.apply(persona3));
console.log(persona1.nombreCompleto.apply(persona3, arreglo))


//Creacion de objetos
let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(true);
let miBoolean2 = true;

let miArray1 = new Array;
let miArray2 = [];

let miFuncion = new Function();
let miFunction1 = function(){};

