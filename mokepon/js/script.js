
let ataqueJugador
let ataquePC
let vidasJugador = 3;
let vidasEnemigo = 3;
let vidaCorazonJugador = "♥️ ♥️ ♥️";
let vidaCorazonEnemigo = "♥️ ♥️ ♥️";
let pierdeEnemigo = document.getElementById("pierde-enemigo");
pierdeEnemigo.hidden = true
let pierdeJugador = document.getElementById("pierde-jugador");
pierdeJugador.hidden = true
let mascotaElegidaAleatorio = aleatorio(1, 3);
let mascotaEnemigo = document.getElementById("mascota-enemigo");    
let botonReiniciar = document.getElementById("boton-reiniciar");
let buckbeackChecked = document.getElementById("buckbeack-checked");
let tarjetaMokeponBuckbeack = document.getElementById("tarjetaMokeponBuckbeack");
let ptolomeoChecked = document.getElementById("ptolomeo-checked");
let tarjetaMokeponPtolomeo = document.getElementById("tarjetaMokeponPtolomeo");
let redmingtonChecked = document.getElementById("redmington-checked");
let tarjetaMokeponRedmington = document.getElementById("tarjetaMokeponRedmington");
let seleccionarAtaque = document.getElementById("seleccionar-ataque");
let botonMascotaJugador = document.getElementById("boton-mascota");
let botonFuego = document.getElementById("boton-fuego"); 
let botonAgua = document.getElementById("boton-agua");
let botonTierra = document.getElementById("boton-tierra");
let seleccionarMascota = document.getElementById("seleccionar-mascota");
let buckbeack = document.getElementById("buckbeack");
let ptolomeo = document.getElementById("ptolomeo");
let redmington = document.getElementById("redmington");
let mascotaJugador = document.getElementById("mascota-jugador");
let spanVidaJugador = document.getElementById("vidasJugador");
let vidas = document.getElementById("vidasEnemigo");




function iniciarJuego(){

    seleccionarAtaque.style.display = "none"

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

    botonFuego.addEventListener("click", ataqueFuego);
    botonFuego.addEventListener("click", ataqueEnemigo);

    botonAgua.addEventListener("click", ataqueAgua);
    botonAgua.addEventListener("click", ataqueEnemigo);

    botonTierra.addEventListener("click", ataqueTierra);
    botonTierra.addEventListener("click", ataqueEnemigo);

    botonReiniciar.addEventListener("click", reiniciarJuego);
    botonReiniciar.hidden = true;

}

function seleccionarMascotaJugador(){

    seleccionarMascota.style.display = "none";
    // display block para mostrar resultados de seleccion donde al inicio estaban 'hidden'
    seleccionarAtaque.style.display = "flex"
    
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
    if(mascotaElegidaAleatorio == 1) {
        mascotaEnemigo.innerHTML = "Buckbeack";
    }else if(mascotaElegidaAleatorio == 2) {
        mascotaEnemigo.innerHTML = "Ptolomeo";
    }else{
        mascotaEnemigo.innerHTML = "Redmington";
    }
}

function checked(colorB, fontWeightB, backgroundB, colorP, fontWeightP, backgroundP, colorR, fontWeightR, backgroundR) {

    buckbeackChecked.style.color = colorB;
    buckbeackChecked.style.fontWeight = fontWeightB;
    tarjetaMokeponBuckbeack.style.backgroundColor = backgroundB;

    ptolomeoChecked.style.color = colorP;
    ptolomeoChecked.style.fontWeight = fontWeightP;
    tarjetaMokeponPtolomeo.style.backgroundColor = backgroundP;

    redmingtonChecked.style.color = colorR;
    redmingtonChecked.style.fontWeight = fontWeightR;
    tarjetaMokeponRedmington.style.backgroundColor = backgroundR;

}

// tarjeta de Buckbeack
buckbeackChecked.addEventListener("click", (a) => {
    checked("green", "bolder", "#111", "#000", "none", "#777", "#000", "none", "#777");
})

// tarjeta de Ptolomeo
ptolomeoChecked.addEventListener("click", (b) => {
    checked("#000", "none", "#777", "green", "bolder", "#111", "#000", "none", "#777");
    
})

// tarjeta de Redmington
redmingtonChecked.addEventListener("click", (c) => {
    checked("#000", "none", "#777", "#000", "none", "#777", "green", "bolder", "#111");

})

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

function finAtaques(){
    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
}

function combate(){

    let mensajeCombate = document.createElement('p');
    mensajeCombate.classList.add("mensaje-ataque");
    mensajes.appendChild(mensajeCombate);

    if(ataqueJugador == ataqueEnemigo){
        mensajeCombate.innerHTML = 'EMPATE ';

    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA' ||
            ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' || 
            ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
        mensajeCombate.innerHTML = 'GANASTE ';
        vidasEnemigo--
        vidas.innerHTML = vidasEnemigo
            if(vidasEnemigo == 2){
                vidaCorazonEnemigo = "♥️ ♥️";
                vidas.innerHTML = vidaCorazonEnemigo;
            }else if(vidasEnemigo == 1){
                vidaCorazonEnemigo = "♥️";
                vidas.innerHTML = vidaCorazonEnemigo;
            }else{
                pierdeEnemigo.innerHTML = "El jugador enemigo no tiene mas vidas";
                pierdeEnemigo.classList.add("pierde-enemigo");
                pierdeEnemigo.hidden = false;
                botonReiniciar.hidden = false
            }
        revisarVidas()
    }else{
        mensajeCombate.innerHTML = 'PERDISTE';
        vidasJugador--
        spanVidaJugador.innerHTML = vidasJugador
        if(vidasJugador == 2){
            vidaCorazonJugador = "♥️ ♥️";
            spanVidaJugador.innerHTML = vidaCorazonJugador
        }else if(vidasJugador == 1){
            vidaCorazonJugador = "♥️";
            spanVidaJugador.innerHTML = vidaCorazonJugador
        }else if(vidasJugador == 0){
            pierdeJugador.innerHTML = "No tenes más vidas perrito. Reinicia el juego ya";
            pierdeJugador.classList.add("pierde-jugador");
            pierdeJugador.hidden = false;
            spanVidaJugador.innerHTML = "0"
            botonReiniciar.hidden = false;
        }
    }
        revisarVidas()
}

function revisarVidas(){

    let botonReiniciar = document.getElementById("reiniciar");

    if(vidasEnemigo == 0){
        botonReiniciar.hidden = false
        finAtaques()
    }else if(vidasJugador == 0){
        botonReiniciar.hidden = false
        finAtaques()
    }
}

function reiniciarJuego(){
    location.reload();
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function crearMnsj(resultado) {

    let parrafo = document.createElement('p');
    parrafo.classList.add("parrafo-mensaje-ataque");
    mensajes.appendChild(parrafo);
    parrafo.innerHTML = '---- Atacaste con "' + ataqueJugador + '" ----<br>' + '---- Enemigo ataca con "' + ataqueEnemigo + '" ----<br>';
    combate();
}

// evento que se inicializa al cargar al 100% la pagina
window.addEventListener('load', iniciarJuego);