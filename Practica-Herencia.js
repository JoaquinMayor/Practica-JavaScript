"use strict";

class Persona{
    static contadorPersona = 0;
    
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.idPersona = ++Persona.contadorPersona;
    }

    get getidPersona(){
        return this.idPersona;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getApellido(){
        return this.apellido;
    }

    set setApellido(apellido){
        this.apellido = apellido;
    }

    get getEdad(){
        return this.edad;
    }

    set setEdad(edad){
        this.edad = edad;
    }

    toString(){
        return `${this.nombre} ${this.apellido}: Edad: ${this.edad}, ID: ${this.idPersona} `;
    }
}


let persona = new Persona("Juan", "Perez", 25);

console.log(persona.getApellido);
console.log(persona.toString());

class Empleado extends Persona{

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido,edad);
        this.sueldo = sueldo;
        this.idEmpleado = Persona.contadorPersona;
    }

    get getIdEmpleado(){
        return this.idEmpleado;
    }

    get getSueldo(){
        return this.sueldo;
    }

    set setSueldo(sueldo){
        this.sueldo = sueldo;
    }

    toString(){
        return ` ${super.toString()} Sueldo: ${this.sueldo} Id Emp: ${this.idEmpleado}`;
    }

}

let empleado = new Empleado("Lucas", "Manuel", 25, 2000);

console.log(empleado.toString());

class Cliente extends Persona{
    constructor(nombre,apellido,edad){
        super(nombre, apellido, edad);
        this.idCliente = Persona.contadorPersona;
        this.fechaRegistro = new Date;
    }

    get getidCliente(){
        return this.idCliente;
    }

    get getFechaRegistro(){
        return this.fechaRegistro;
    }

    set setFechaRegistro(fecha){
        this.fechaRegistro = fecha;
    }

    toString(){
        return `${super.toString()} Fecha Registro: ${this.fechaRegistro.toString()}`
    }
}

let cliente = new Cliente("Lucas", "Manuel", 25);
console.log(cliente.toString());
console.log(Persona.contadorPersona);

