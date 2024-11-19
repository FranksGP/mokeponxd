let ataqueJugador; // variable global
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

// inicio del juego
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJuagador);

    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego);
}

// seleccion de nuestra mascota
function seleccionarMascotaJuagador(){
    let inputHipodogue = document.getElementById('hipodoge')//.getElementById es un metodo que nos permite acceder a un elemento del DOM
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodogue.checked){ //.checked es un metodo que funciona para verificar que elemento es seleccionado
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else{
        alert('No has seleccionado una mascota')
    }

    seleccionarMascotaEnemigo()
}

// seleccion de la mascota del enemigo
function seleccionarMascotaEnemigo(){
    let mascotaAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodogue' //.innerHTML agrega el valor a la id de la etiquete nombreada, en este caso mascota-enemigo 
    } else if (mascotaAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

//ataque de fuego
function ataqueFuego(){

    ataqueJugador = 'Fuego';
    ataqueAleatorioEnemigo();
}

//ataque de agua
function ataqueAgua(){
    
    ataqueJugador = 'Agua';
    ataqueAleatorioEnemigo();
}

//ataque de tierra
function ataqueTierra(){
    
    ataqueJugador = "Tierra";
    ataqueAleatorioEnemigo();
}

//ataque aleatorio del enemigo
function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3);

    if (ataqueAleatorio == 1){
        ataqueEnemigo = 'Fuego';
    } else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'Agua';
    } else {
        ataqueEnemigo = 'Tierra';
    }
    combate()
}

//combate
function combate(){
        let spanVidasJugador = document.getElementById('vidas-jugador');
        let spanVidasEnemigo = document.getElementById('vidas-enemigo');

        if ( ataqueEnemigo == ataqueJugador){
          crearMensaje("EMPATE!!!!!")
        } else if((ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') || (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') || (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua')){
          crearMensaje("GANASTE🎉!!!!!")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
        } else {
          crearMensaje("PERDISTE🙁");
          vidasJugador--
          spanVidasJugador.innerHTML = vidasJugador
        }
        revisarVidas()
    }

function revisarVidas(){
    if (vidasEnemigo == 0){
        //GANASTE
        crearMensajeFinal('has ganado la partida🎉!!!!!');
    } else if(vidasJugador == 0){
        //PERDISTE
        crearMensajeFinal('has perdio la partida🙁');
    }
}
// crear resultado del combate
function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensaje');// se selecciona donde se quiere hubiacer el mensaje
    
    let parrafo = document.createElement('p'); //crea un elemento en el DOM en este caso se creo una etiqueta <p>
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', las mascotas del enemigo atacó con ' + ataqueEnemigo + '-' +resultado;

    sectionMensaje.appendChild(parrafo);//.appendChild crea el parrafo como si fuera hijo del <section>
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensaje = document.getElementById('mensaje');
    
    let parrafo = document.createElement('p');
    parrafo.innerHTML = resultadoFinal

    sectionMensaje.appendChild(parrafo);
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.disabled = true
}


function reiniciarJuego(){
    location.reload();//llocation.reload() funciona para recargar la localizacion de 
}
//Eleccion del pc
function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)//.addEventListener escucha eventos
//cargar el documento HTML primero y despues llama la funcion 'iniciarJuego'