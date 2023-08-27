function miFuncion1(){
    console.log("Fúncion 1");
}

function miFuncion2(){
    console.log("Función 2");
}

//Función de tipo callback (llamar a una funcion dentro de otra funcion)

function imprimir(mensaje){
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback){
    let res = op1 + op2;
    funcionCallback("Resultado: " + res);
}

sumar(5,3,imprimir);

//Llamadas asíncronas con uso setTimeout (permite dar inicio a una nueva tarea)

function miFuncionCallBack(){
    console.log("Saludo asíncrono despues de 3 seg");
}

//Recibe funcion callback y luego el tiempo que queremos que transcurra, esta en milisegundos
setTimeout(miFuncionCallBack, 3000);

//SetInterval llama la funcion varias veces cada cierto tiempo

let reloj = () =>{
    let fecha = new Date();
    console.log(fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());
}

//setInterval(reloj, 1000);