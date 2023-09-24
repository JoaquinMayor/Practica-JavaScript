function agregarPersona(){
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");

    if(nombre.value != "" && apellido.value!="" && nombre.value!= " " && apellido.value != " "){
        nombre.value = nombre.value.charAt(0).toUpperCase() + nombre.value.slice(1);
        apellido.value = apellido.value.charAt(0).toUpperCase() + apellido.value.slice(1);
       
        let html = document.getElementById("listado").innerHTML;
        html +=`<li class="persona">${nombre.value} ${apellido.value}</li>`
        document.getElementById("listado").innerHTML = html;
    }else{
        alert("Faltan ingresar datos");
    }
}