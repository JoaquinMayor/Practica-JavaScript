class Producto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.idProducto = ++Producto.contadorProductos;
    }

    get getIdProducto(){
        return this.idProducto;
    }

    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getPrecio(){
        return this.precio;
    }

    set setPrecio(precio){
        this.precio = precio;
    }

    toString(){
        return `               ID: ${this.idProducto}
                Nombre: ${this.nombre}
                Precio: $${this.precio}`
    }
}

class Orden{
    static contadorOrdenes = 0;
    static get MAX_Projductos(){
        return 5;
    }
    constructor(){
        this.productos = [];
        this.contadorProductosAgregados = 0;
        this.idOrden = ++Orden.contadorOrdenes;
    }

    agregarProducto(producto){
        
        if(producto instanceof Producto && this.productos.length< Orden.MAX_Projductos){
            this.productos.push(producto);
            this.contadorProductosAgregados++;
        }else{
            throw "No se pueden agregar más productos"
        }
       
    }

    calcularTotal(){
        let totalVenta = 0
        for(let producto of this.productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let mensaje = `     Ticket N° ${this.idOrden}: \n`
        for(let producto of this.productos){
            mensaje+= " " + producto.toString() + " " + "\n" + "\n";
        }
        mensaje +="                Total a pagar: $" + this.calcularTotal() 

        return mensaje;
    }
}

let producto1 = new Producto("Pantalón", 200);
let producto2 = new Producto("Camisa", 100);
console.log(producto1.toString());
console.log(producto2.toString());

let orden = new Orden();
orden.agregarProducto(producto1);
orden.agregarProducto(producto2);

console.log(orden.mostrarOrden());
let producto3 = new Producto("Cinturo", 50);

let orden2 = new Orden();

orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);

try{
    orden2.agregarProducto(producto1);
    orden2.agregarProducto(producto1);
    console.log(orden2.mostrarOrden());
}catch(error){
    console.log(error);
}


