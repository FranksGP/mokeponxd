let ataqueJugador; // variable global

function ataqueFuego(){
    let botonFuego = document.getElementById('boton-fuego');
    botonFuego.addEventListener('click', ataqueFuego);
    
    ataqueJugador = 'Fuego';
}
function ataqueAgua(){
    let botonAgua = document.getElementById('boton-agua');
    botonAgua.addEventListener('click', ataqueAgua);

    ataqueJugador = 'Agua';
}

function ataqueTierra(){
    let botonTierra = document.getElementById('boton-tierra');
    botonTierra.addEventListener('click', ataqueTierra);

    ataqueJugador = "Tierra";
}

    
// inicio del juego
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJuagador)

    ataqueFuego();
    ataqueAgua();
    ataqueTierra();
    
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
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodogue' //.innerHTML
    } else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

//Eleccion del pc
function aleatorio(min, max){
    return Math.floor( Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)//.addEventListener escucha eventos
//cargar el documento HTML primero y despues llama la funcion 'iniciarJuego'