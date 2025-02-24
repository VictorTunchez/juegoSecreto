let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
         }else{
             if(numeroDeUsuario>numeroSecreto){
               asignarTextoElemento('p',`Incorrecto, el numero es menor a ${numeroDeUsuario}`);
             }else{
                 asignarTextoElemento('p',`Incorrecto, el numero es mayor a ${numeroDeUsuario}`);
             }
             intentos++;  
             limpiarInput();
         }
         
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al 10`);
    numeroSecreto =generarNumeroSecreto();
    intentos =1;

}


function reinicioJuego(){
    limpiarInput();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarInput(){
     let valor = document.querySelector('#valorUsuario');
     valor.value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo){
     asignarTextoElemento('p',`Ya se sortearon todos los numeros posibles`);
    }else if(listaNumerosSorteados.includes(numeroGenerado)){
     return generarNumeroSecreto();
    }else{
       listaNumerosSorteados.push(numeroGenerado);
       return numeroGenerado;
    }
}

condicionesIniciales();
