let ataqueJugador // variable global
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

// inicio del juego
function iniciarJuego() {

        //el metodo .style llama a los estilos predeteminados del contenedero.
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'// desaparese la seleccion de ataque.

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'// desaparese el boton reiniciar.
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)// cuando haga click llame la funcion seleccionarMascotaJugador

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego) // cuando haga click, llama la funcion ataqueFuego
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua) // cuando haga click, llama la funcion ataqueAgua
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra) // cuando haga click, llama la funcion ataqueTierra

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego) // cuando haga click, llama la funcion reiniciarJuego
}

// seleccion de nuestra mascota

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    let imagenHipodogue = document.createElement('img')
    imagenHipodogue.src = "../assets/mokepons_mokepon_hipodoge_attack.png"
    let imagenCapipepo = document.createElement('img')
    imagenCapipepo.src = "../assets/mokepons_mokepon_capipepo_attack.png"
    let imagenRatigueya = document.createElement('img')
    imagenRatigueya.src = "../assets/mokepons_mokepon_ratigueya_attack.png"
    let insertMacotaJugador = document.getElementById('insertar-mascota-jugador')

    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
        insertMacotaJugador.appendChild(imagenHipodogue)
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
        insertMacotaJugador.appendChild(imagenCapipepo)
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
        insertMacotaJugador.appendChild(imagenRatigueya)
    } else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

// seleccion de la mascota del enemigo

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    let insertMascotaEnemigo = document.getElementById('insertar-mascota-enemigo')

    let imagenHipodogueEnemigo = document.createElement('img')
    imagenHipodogueEnemigo.src = "../assets/mokepons_mokepon_hipodoge_attack.png"
    let imagenCapipepoEnemigo = document.createElement('img')
    imagenCapipepoEnemigo.src = "../assets/mokepons_mokepon_capipepo_attack.png"
    let imagenRatigueyaEnemigo = document.createElement('img')
    imagenRatigueyaEnemigo.src = "../assets/mokepons_mokepon_ratigueya_attack.png"

    if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
        insertMascotaEnemigo.appendChild(imagenHipodogueEnemigo)
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
        insertMascotaEnemigo.appendChild(imagenCapipepoEnemigo)
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
        insertMascotaEnemigo.appendChild(imagenRatigueyaEnemigo)
    }
}
//ataque de fuego

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
//ataque de agua
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
//ataque de tierra

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
//ataque aleatorio del enemigo
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)
    
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}

function combate() {
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')
    
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("💥EMPATE💥")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("🥳GANASTE🎉")
        vidasEnemigo--// llama a la variable global vidasEnemigo y le resta 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("🥳GANASTE🎉")
        vidasEnemigo-- // llama a la variable global vidasEnemigo y le resta 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("🥳GANASTE🎉")
        vidasEnemigo-- // llama a la variable global vidasEnemigo y le resta 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("🙁PERDISTE📉")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! Ganaste 🥳🎉")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('Lo siento, PERDISTE 🙁📉')
    }
}
// crear resultado del combate
function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('resultado')// se selecciona donde se quiere hubiacer el mensaje
    let ataquesDelJugador = document.getElementById('ataques-del-jugador')
    let ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
    
    let nuevoAtaqueDelJugador = document.createElement('p') //crea un elemento en el DOM en este caso se creo una etiqueta <p>
    let nuevoAtaqueDelEnemigo = document.createElement('p') //crea un elemento en el DOM en este caso se creo una etiqueta <p>

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)//.appendChild crea el parrafo como si fuera hijo del <section>
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)//.appendChild crea el parrafo como si fuera hijo del <section>
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById('resultado')
    
    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()//llocation.reload() funciona para recargar la localizacion de 
}
//Eleccion del pc
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)//.addEventListener escucha eventos
//cargar el documento HTML primero y despues llama la funcion 'iniciarJuego'
