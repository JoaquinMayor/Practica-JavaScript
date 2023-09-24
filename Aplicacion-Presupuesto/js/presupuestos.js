let ingresoTotal = 0;
let egresoTotal = 0;
let total = 0;
let porcentaje = 0;
let elementos = [];

class Elemento{
    tipo = ""
     nombre = "";
     monto = 0;
    constructor(tipo, nombre, monto){
        this.tipo = tipo;
        this.nombre = nombre;
        this.monto = monto;
    }
}

function cargarMontos(){
    document.getElementById("ingreso-total").innerHTML = `$${ingresoTotal}`;
    document.getElementById("egreso-total").innerHTML = `-$${egresoTotal}`;
    document.getElementById("total").innerHTML = `$${total}`;
}

function cargarPresupuesto(){
    let tipo = document.getElementById("tipo");
    let nombre = document.getElementById("nombre");
    let monto = document.getElementById("monto");
     monto = Number(monto.value);
     
    let elemento = new Elemento(tipo.value, nombre.value, monto);
    elementos.push(elemento);

    if(elemento.tipo === "ingreso"){
        ingresoTotal += elemento.monto;
    }else if(elemento.tipo === "egreso"){
        egresoTotal+=elemento.monto;
        calcularPorcentaje();
    }

    
    total = ingresoTotal - egresoTotal;
    cargarMontos();
    cargarListas();
}

function cargarListas(){
    let  i= 0;
    let htmlEgreso = "";
    let htmlIngreso = "";
    if(elementos.length!=0){
        for (const elemento of elementos) {
            if(elemento){
                if(elemento.tipo === "ingreso"){;
                    htmlIngreso += `<li>${elemento.nombre}<span class="monto-ingreso">+$${elemento.monto}</span>  <button id="${i}" onclick="quitarElemento(event)">Borrar<buton/></li>  <hr>`; 
                    document.getElementById("lista-ingreso").innerHTML = htmlIngreso; 
                }else if(elemento.tipo === "egreso"){
                    htmlEgreso += `<li>${elemento.nombre} <span class="monto-egreso">-$${elemento.monto}</span> <button id="${i}" onclick="quitarElemento(event)">Borrar<buton/></li>  <hr>`;
                    document.getElementById("lista-egreso").innerHTML = htmlEgreso; 
                    calcularPorcentaje();
                }
                i++
            }
            
        }
    }else{
        document.getElementById("lista-ingreso").innerHTML = htmlIngreso; 
        document.getElementById("lista-egreso").innerHTML = htmlEgreso; 
    }
    
   
}

function calcularPorcentaje(){
    if(total == 0){
        porcentaje = 0;
    }else{
        porcentaje = egresoTotal*100/(total+ingresoTotal);
    }
    
    document.getElementById("porcentaje").innerHTML=`%${porcentaje}`;
}



function quitarElemento(event){
    let borrar = event.target.id;
    let elemento = document.getElementById(borrar);
    
    
    if(elementos[borrar].tipo === "ingreso"){
        total -= elementos[borrar].monto;
        ingresoTotal -= elementos[event.target.id].monto;
    }else if(elementos[borrar].tipo === "egreso"){
        total += elementos[borrar].monto;
        egresoTotal -= elementos[borrar].monto;
        
    }
    if(elemento){
        if(elementos.length==1){
            elementos.pop();
        }else{
            elementos.splice(borrar,1);
            console.log(elementos);
        }
        console.log(elementos);
        
    }
    calcularPorcentaje();
    cargarListas();
    cargarMontos();
}

cargarMontos();

