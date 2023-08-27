//Los parametros son funciones del tipo callback, primero en caso de que el codigo se corra correctamente y el segun que se produsca un fallo
//Lo que hace es recibir 2 metodos y en caso de que se cumpla el criterio dentro de la promesa que en este caso es siempre true, se van a pasar los valores que les pusimos
let miPromesa = new Promise((resolved, rejected)=>{
    let expresion = true;
    if(expresion){
        resolved("Resolvió correctamente");
    }else{
        rejected("Se produjo un error");
    }
});

//Llamado de la promesa, se pasa 2 funciones flacha como parametros
miPromesa.then(
    valor => console.log(valor), 
    error => console.log(error)
);

//Otra manera de expresar la promesa, en el then duncion correcta catch valor de error
miPromesa.then(valor => console.log(valor)).catch( error => console.log(error));

let promesa = new Promise((resolver) => {
    setTimeout(()=>resolver("Saludos con promesa y timeout"), 3000);
});

promesa.then(valor => console.log(valor));

//Async Define que una función regresa una promesa

async function miFuncionConPromesa(){
    return "Saludos con promesa y async";
}

miFuncionConPromesa().then(valor => console.log(valor));

//async con await, await agarra el dato dentro de la promesa dentro del async y lo trabaja en ese lado

async function miFuncionConPromesaYAwait(){
    let miPromesa = new Promise(resolver => {
        resolver("Promesa con await");
    });

    console.log(await miPromesa);
}

miFuncionConPromesaYAwait();


//Promesas, await, async y setTimeout

async function miFuncionConPromesaAwaitTimeout(){
    let miPromesa = new Promise(resolver => {
        setTimeout(()=> resolver("promesa con await y timeout", 3000));
    });
    console.log(await miPromesa);
}

//miFuncionConPromesaAwaitTimeout();