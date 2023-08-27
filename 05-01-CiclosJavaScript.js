let contador = 0;

while(contador < 3){
    console.log(contador);
    contador++;
}

console.log("Fin ciclo while");

contador = 0;

do{
    console.log(contador);
    contador++;
}while(contador<3);

console.log("Fin del ciclo do-while");

for(let i=0; i<3; i++){
    console.log(i);
}
console.log("Fin del ciclo for");

for(let i = 0; i<=10; i++){
    if(i % 2 === 0){
        console.log(i);
        break;
    }
}

for(let i = 0; i<=10; i++){
    if(i % 2 !== 0){
        continue; //Hace que se corte ahi y vaya a la siguiente itedracion
    }
    console.log(i);
}

//Etiquetas: hace que el codigo vuelva a comenzar de donde le digas en este caso es la de inicio

inicio:
for(let i = 0; i<=10; i++){
    if(i % 2 !== 0){
        continue inicio; //Hace que se corte ahi y vaya a la siguiente itedracion
    }
    console.log(i);
}
