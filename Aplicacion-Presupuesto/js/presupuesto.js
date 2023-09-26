let total = 0;
let ingresoTotal = 0;
let egresoTotal = 0;
let porcentajeEgreso = 0;

class Elemento{
    static idIncremento = 0;
    tipo  = "";
     monto = 0;
     descripcion = "";
     id = 0;

     constructor(tipo, monto, descripcion){
        this.tipo =tipo;
        this.monto = monto;
        this.descripcion = descripcion;
        this.id = Elemento.idIncremento++;
     }

     get getTipo(){
        return this.tipo;
     }

     get getDescripcion(){
        return this.descripcion;
     }

     get getMonto(){
        return this.monto;
     }

     get getId(){
        return this.id;
     }
}

let ingresos = [];
let egresos = [];

function cargarDatos(){
    let tipo = document.getElementById("tipo");
    let monto = document.getElementById("monto");
    let descripcion = document.getElementById("nombre");
    monto = Number(monto.value);
    let elemento = new Elemento(tipo.value, monto, descripcion.value);
    console.log(elemento);
    
    if(elemento.getTipo === "ingreso"){
        ingresos.push(elemento);
        ingresoTotal += elemento.getMonto;
        total += elemento.getMonto;
        calcularPorcentaje();
    }else if(elemento.getTipo === "egreso"){
        egresos.push(elemento);
        egresoTotal += elemento.getMonto;
        total -= elemento.getMonto;
        calcularPorcentaje();
    }
    cargarTotales();
    cargarListas();
}

function cargarTotales(){
    document.getElementById("ingreso-total").innerHTML = `+$${ingresoTotal}`;
    document.getElementById("egreso-total").innerHTML=`-$${egresoTotal}`;
    document.getElementById("total").innerHTML=`$${total}`;
}

function cargarListas(){
    let id = 0;
    let html = "";
    for (const elemento of ingresos) {
        html += `<li id= "${elemento.getId}"> ${elemento.getDescripcion} <span class="monto-ingreso">+${elemento.getMonto}</span> <button id="${elemento.getId}" onclick="quitarElemento(event)">Borrar<buton/></li>  <hr></li>`
        
    }
    document.getElementById("lista-ingreso").innerHTML= html;
    html = "";
    for (const elemento of egresos) {
        html += `<li id= "${elemento.getId}"> ${elemento.getDescripcion} <span class="monto-egreso">+${elemento.getMonto}</span><buttom> <button id="${elemento.getId}" onclick="quitarElemento(event)">Borrar<buton/></li>  <hr></li>`
    }
    document.getElementById("lista-egreso").innerHTML= html;
}

function quitarElemento(event){
    let borrar = event.target.id;
    let encontrado = false;


    for (let i = 0; i<ingresos.length && encontrado === false;i++) {
        if(ingresos[i].getId == borrar){
            encontrado = true;
            total -= ingresos[i].getMonto;
            ingresoTotal -=ingresos[i].getMonto;
            ingresos.splice(i,1);
        }
    }

    for (let i = 0; i<egresos.length && encontrado === false;i++) {
        if(egresos[i].getId == borrar){
            encontrado = true;
            total += egresos[i].getMonto;
            egresoTotal -= egresos[i].getMonto;
            egresos.splice(i,1);
        }
    }
    cargarTotales();
    cargarListas();
}


function calcularPorcentaje(){
    porcentajeEgreso = egresoTotal/100*(total);
    document.getElementById("porcentaje").innerHTML=`${porcentajeEgreso}%`;
}


cargarTotales();