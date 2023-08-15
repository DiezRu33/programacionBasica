
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
    alert(ataqueJugador)
}

function ataqueAgua() {
    ataqueJugador = 'AGUA';
    alert(ataqueJugador)
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA';
    alert(ataqueJugador)
}

function ataqueEnemigo(){
    const especialEnemigo = aleatorio(1, 3)

    if (especialEnemigo == 1){
        especialEnemigo = 'FUEGO'
    }else if(especialEnemigo == 2){
        especialEnemigo = 'AGUA'
    }else{
        especialEnemigo = 'TIERRA'
    }
} 

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// evento que se inicializa al cargar al 100% la pagina
window.addEventListener('load', iniciarJuego);