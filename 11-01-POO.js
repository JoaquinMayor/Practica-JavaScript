class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return "Empleado: nombre: " + this.nombre + ", sueldo: " + this.sueldo;
    }
}
//Herencia
class Gerente extends Empleado{
    constructor(departamento, nombre, sueldo){
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalles(){
        return super.obtenerDetalles() + ", departamento: " + this.departamento;
    }
}
//Polimorfismo
function imprimir(tipo){
    tipo.obtenerDetalles();
    if(tipo instanceof Gerente){
        console.log("Es un Gerente");
    }else if(tipo instanceof Empleado) {
        console.log("Es un Empleado");
    }
}

let emplado1 = new Empleado("Juan", 3000);
console.log(emplado1.obtenerDetalles());

let gerente1 = new Gerente("Sistemas", "Marcos", 5000);

console.log(gerente1.obtenerDetalles());


imprimir(emplado1);
imprimir(gerente1);