function sumar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    let suma = num1 + num2
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La suma es: " + suma;
    resultadoElement.classList.add("mostrar");

    if (suma > 10){
        resultadoElement.className = "alert alert-success mostrar";
    } else {
        resultadoElement.className = "alert alert-danger mostrar";
    }
}
document.getElementById("calcularBtn").addEventListener("click", sumar); 


function restar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    let restar = num1 - num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La resta es: " + restar;
    resultadoElement.classList.add("mostrar");

    if(restar > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    }else {
        resultadoElement.className = "alert alert-danger mostrar";

    }
}

document.getElementById("calcularRestaBtn").addEventListener("click", restar);
    
///////////////////////////////////////////////////////////////////////////
function multiplicar(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    let multiplicar = num1 * num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La multiplicación es: " + multiplicar;
    resultadoElement.classList.add("mostrar");

    if(multiplicar > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    }else {
        resultadoElement.className = "alert alert-danger mostrar";

    }
}

document.getElementById("calcularMultiplicacionBtn").addEventListener("click", multiplicar);

///////////////////////////////////////////////////////////////////////////
function dividir(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    if(isNaN(num1) || isNaN(num2)){
        alert("Por favor, ingresa números válidos en ambos campos.");
        return;
    }

    let dividir = num1 / num2;

    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La división es: " + dividir;
    resultadoElement.classList.add("mostrar");

    if(dividir > 10) {
        resultadoElement.className = "alert alert-success mostrar";
    }else {
        resultadoElement.className = "alert alert-danger mostrar";

    }
}

document.getElementById("calcularDivisionBtn").addEventListener("click", dividir);