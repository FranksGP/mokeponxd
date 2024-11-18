let ataqueJugador; // variable global
let ataqueEnemigo;

// inicio del juego
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJuagador)
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);
    
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
        if ( ataqueEnemigo == ataqueJugador){
          crearMensaje("EMPATE!!!!!")
        } else if((ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') || (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') || (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua')){
          crearMensaje("GANASTE🎉!!!!!")
        } else {
          crearMensaje("perdiste 🙁")
        }
    }

// crear resultado del combate
function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensaje')// se selecciona donde se quiere hubiacer el mensaje
    
    let parrafo = document.createElement('p'); //crea un elemento en el DOM en este caso se creo una etiqueta <p>
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', las mascotas del enemigo atacó con ' + ataqueEnemigo + '-' +resultado;

    sectionMensaje.appendChild(parrafo);//.appendChild crea el parrafo como si fuera hijo del <section>
}

//Eleccion del pc
function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)//.addEventListener escucha eventos
//cargar el documento HTML primero y despues llama la funcion 'iniciarJuego'