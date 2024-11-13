// alert("hola mundo js")
function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascoraJuagador)
}

function seleccionarMascoraJuagador(){
    alert("seleccionaste tu mascotaaa")
}

window.addEventListener('load', iniciarJuego)