function sumar(){
    let x = parseInt(document.getElementById("var1").value);
    let y = parseInt(document.getElementById("var2").value);
    document.getElementById('result').innerHTML = x + y;
}

function restar(){
    let x = Number(document.getElementById("var1").value);
    let y = Number(document.getElementById("var2").value);
    document.getElementById('result').innerHTML = x - y;
}

function multiplicar(){
    let x = Number(document.getElementById("var1").value);
    let y = Number(document.getElementById("var2").value);
    result = x * y;  
    document.getElementById('result').innerHTML = x * y;
}

function dividir(){
    let x = Number(document.getElementById("var1").value);
    let y = Number(document.getElementById("var2").value);
    result = x / y;  
    document.getElementById('result').innerHTML = x / y;
}

function IMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = (peso / (altura * altura)).toFixed(2); 
    document.getElementById('imc').innerHTML = imc + ' ' + estado(imc);
}

function estado(IMC){
    if(IMC < 18)
        return 'Bajo peso';
    if(IMC >= 18 && IMC <= 24.9)
        return 'Peso normal';
    if(IMC >= 25 && IMC <= 29.9)
        return 'Sobre peso';
    if(IMC >= 30)
        return 'Obesidad';
}