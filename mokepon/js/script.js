
let ataqueJugador
let ataquePC

function iniciarJuego(){

    const botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    let botonFuego = document.getElementById("boton-fuego"); 
    botonFuego.addEventListener("click", ataqueFuego);
    botonFuego.addEventListener("click", ataqueEnemigo);

    let botonAgua = document.getElementById("boton-agua");
    botonAgua.addEventListener("click", ataqueAgua);
    botonAgua.addEventListener("click", ataqueEnemigo);

    let botonTierra = document.getElementById("boton-tierra");
    botonTierra.addEventListener("click", ataqueTierra);
    botonTierra.addEventListener("click", ataqueEnemigo);

}

function seleccionarMascotaJugador(){

    const buckbeack = document.getElementById("buckbeack");
    const ptolomeo = document.getElementById("ptolomeo");
    const redmington = document.getElementById("redmington");
    const mascotaJugador = document.getElementById("mascota-jugador");

    if(buckbeack.checked) {
        mascotaJugador.innerHTML = "Buckbeack";
    }else if(ptolomeo.checked) {
        mascotaJugador.innerHTML = "Ptolomeo";
    }else if(redmington.checked){
        mascotaJugador.innerHTML = "Redmington";
    }else{
        alert("No seleccionaste nada")
    }

    seleccionarMascotaEnemigo()
}


function seleccionarMascotaEnemigo(){
    const mascotaElegidaAleatorio = aleatorio(1, 3);
    const mascotaEnemigo = document.getElementById("mascota-enemigo");    

    if(mascotaElegidaAleatorio == 1) {
        mascotaEnemigo.innerHTML = "Buckbeack";
    }else if(mascotaElegidaAleatorio == 2) {
        mascotaEnemigo.innerHTML = "Ptolomeo";
    }else{
        mascotaEnemigo.innerHTML = "Redmington";
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO';
}

function ataqueAgua() {
    ataqueJugador = 'AGUA';
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA';
}

function ataqueEnemigo(){
    const especialEnemigo = aleatorio(1, 3)

    if (especialEnemigo == 1){
        ataqueEnemigo = 'FUEGO';
    }else if(especialEnemigo == 2){
        ataqueEnemigo = 'AGUA';
    }else{
        ataqueEnemigo = 'TIERRA';
    }

    crearMnsj();
} 

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function crearMnsj() {

    let parrafo = document.createElement('p');
    mensajes.appendChild(parrafo);
    parrafo.innerHTML = '---- Atacaste con "' + ataqueJugador + '" ----<br>' + '---- Enemigo ataca con "' + ataqueEnemigo + '" ----<br>';
    combate();
}

function combate(){

    let mensajeCombate = document.createElement('p');
    mensajes.appendChild(mensajeCombate);

    if(ataqueJugador == ataqueEnemigo){
        mensajeCombate.innerHTML = 'EMPATE 🍪';
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' || ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        mensajeCombate.innerHTML = 'GANASTE 🍪🍪';
    }else{
        mensajeCombate.innerHTML = 'PERDISTE';
    }
}

// evento que se inicializa al cargar al 100% la pagina
window.addEventListener('load', iniciarJuego);