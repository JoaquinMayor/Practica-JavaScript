class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this.tipoEntrada = tipoEntrada;
        this.marca = marca;
    }

    get getTipoEntrada(){
        return this.tipoEntrada;
    }

    set setTipoEntrada(tipoEntrada){
        this.tipoEntrada = tipoEntrada;
    }

    get getMarca(){
        return this.marca;
    }

    set setMarca(marca){
        this.marca = marca;
    }

    toString(){
        return `Tipo de Entrada: ${this.tipoEntrada} Marca: ${this.marca}`;
    }
}


class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idRaton = ++Raton.contadorRatones;
    }

    toString(){
        return `ID: ${this.idRaton} ${super.toString()}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this.idTeclado = ++Teclado.contadorTeclados;
    }

    toString(){
        return `ID: ${this.idTeclado} ${super.toString()}`;
    }
}


class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this.idMonitor = ++Monitor.contadorMonitores;
        this.marca = marca;
        this.tamaño = tamaño;
    }

    get getIdMonitor(){
        return this.idMonitor;
    }

    get getMarca(){
        return this.marca;
    }

    set setMarca(marca){
        this.marca = marca;
    }

    get getTamaño(){
        return this.tamaño;
    }

    set setTamaño(tamaño){
        this.tamaño = tamaño;
    }

    toString(){
        return `ID: ${this.idMonitor}  Marca: ${this.marca}  Tamaño: ${this.tamaño}cm.`
    }
}


class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, raton){
        this.idComputadora = ++Computadora.contadorComputadoras;
        this.nombre = nombre;
        this.monitor = monitor;
        this.teclado = teclado;
        this.raton = raton;
    }

    get getIdComputadora(){
        return this.idComputadora;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getMonitor(){
        return this.monitor;
    }

    set setMonitor(monitor){
        this.monitor = monitor;
    }

    get getTeclado(){
        return this.teclado;
    }
    set setTeclado(teclado){
        this.teclado = teclado;
    }

    get getRaton(){
        return this.raton;
    }

    set setRaton(raton){
        this.raton = raton;
    }

    toString(){
        return `Nombre: ${this.nombre} \n Monitor: ${this.monitor.toString()}\n Teclado: ${this.teclado.toString()}\n Raton: ${this.raton.toString()}`
    }
}

class Orden{
    static contadorOrdenes = 0;

    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.computadoras = [];
    }

    get getIdOrden(){
        return this.idOrden;
    }
    agregarComputadoras(computadora){
        if(computadora instanceof Computadora){
            this.computadoras.push(computadora);
        }
    }

    mostrarOrden(){
        let mensaje = `ID Orden: ${this.idOrden}`;

        for(let computadora of this.computadoras){
            mensaje += ` ${computadora.toString()} \n \n`;
        }

        return mensaje;
    }
}

let monitor1 = new Monitor("HP", 15);
let monitor2 = new Monitor("Dell", 27);

let raton1 = new Raton("USB", "HP");
let raton2 = new Raton("Bluetooth", "Dell");

let teclado1 = new Teclado("BlueTooth", "MSI");
let teclado2 = new Teclado("USB", "Acer");

let computadora1 = new Computadora("HP", monitor1, teclado1, raton1);
let computadora2 = new Computadora("HP", monitor2, teclado2, raton2);

let orden1 = new Orden();
orden1.agregarComputadoras(computadora1);
orden1.agregarComputadoras(computadora2);

console.log(orden1.mostrarOrden());

