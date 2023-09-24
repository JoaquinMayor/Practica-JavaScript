 function relojDigital(){
    setInterval(establecerDatos, 1000);
}

function establecerDatos(){

    let fecha = new Date; 

    const dias = ["Dom","Lun", "Mar", "Mie", "Jue", "Vie", "Sab"];
    let dia = dias[fecha.getDay()];
    const meses = ["Ene", "Feb", "Mar", "Abr", "may", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
    let mes = meses[fecha.getMonth()];
    let diaNum = fecha.getDate();

    let hora = formatoHora(fecha.getHours());
    let minuto = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());

    document.getElementById("hora").innerHTML = `${hora}:${minuto}:${segundos}`;
    document.getElementById("fecha").innerHTML = `${dia}, ${diaNum} ${mes}`;

}

function formatoHora(hora){

    if(hora<10){
        hora ="0"+hora;
    }
    return hora;
}


relojDigital();