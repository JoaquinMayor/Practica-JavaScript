function sumar(){
    let num1 = document.getElementById("operandoA");
    let num2 = document.getElementById("operandoB");
    let resultado = parseInt(num1.value) + parseInt(num2.value);
    if(isNaN(resultado)){
        document.getElementById("resultado").innerHTML= "No ingreso valores";
    }
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`;
   
    
}