const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonReiniciar = document.getElementById('boton-reiniciar')
sectionReiniciar.style.display = 'none'

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')

const sectionVerMapa = document.getElementById('verMapa');
const mapa = document.getElementById("mapa");

let mokepones = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = [];
let indexAtaqueJugador 
let indexAtaqueEnemigo
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let resultadoVictoria
let resultadoDerrota
let ataqueJugador = []
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d");
let intervalo
mapaBackground = new Image();
mapaBackground.src = "mokemap.png";

class Mokepon {
    constructor(nombre, foto, vida, tipo) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo;
        this.ataques = []
        this.x = 20;
        this.y = 30;
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = foto;
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
}

let hipodoge = new Mokepon('Hipodoge', 'hipodoge.png', 5, "agua")

let capipepo = new Mokepon('Capipepo', 'capipepo.png', 5, "tierra")

let ratigueya = new Mokepon('Ratigueya', 'ratigueya.png', 5, "fuego")

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🌱', id: 'boton-tierra' },
)

capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '🌱', id: 'boton-tierra' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🔥', id: 'boton-fuego' },
    
)

ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '🔥', id: 'boton-fuego' },
    { nombre: '💧', id: 'boton-agua' },
    { nombre: '🌱', id: 'boton-tierra' },
)

mokepones.push(hipodoge,capipepo,ratigueya)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none';
    sectionVerMapa.style.display = 'none';

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
    contenedorTarjetas.innerHTML += opcionDeMokepones

     inputHipodoge = document.getElementById('Hipodoge')
     inputCapipepo = document.getElementById('Capipepo')
     inputRatigueya = document.getElementById('Ratigueya')

    })
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    
    

    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'
    
    // sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'flex';

    iniciarMapa();

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }

    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
        
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById("boton-fuego");
    botonAgua = document.getElementById("boton-agua");
    botonTierra = document.getElementById("boton-tierra");
    botones = document.querySelectorAll(".BAtaque");

}

function secuenciaAtaques(){
    botones.forEach((boton) => {
        boton.addEventListener("click", (e) => {
            if(e.target.textContent === "🔥"){
                ataqueJugador.push('FUEGO');
                console.log(ataqueJugador);
                boton.style.background = "#112f58";
                boton.disabled = true;
            }else if(e.target.textContent === "💧"){
                ataqueJugador.push('AGUA');
                console.log(ataqueJugador);
                boton.style.background = "#112f58";
                boton.disabled = true;
            }else if(e.target.textContent === "🌱"){
                ataqueJugador.push('TIERRA');
                console.log(ataqueJugador);
                boton.style.background = "#112f58";
                boton.disabled = true;
            }
            ataqueAleatorioEnemigo();
        });
    })
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaques()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo);
    iniciarPelea();
}

function iniciarPelea(){
    if(ataqueJugador.length === 5){
        combate();
    }

}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador];
    indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
    
    for (let i = 0; i < ataqueJugador.length; i++) {
            if(ataqueJugador[i] === ataqueEnemigo[i]){
                indexAmbosOponentes(i, i);
                crearMensaje("EMPATE");
            }else if(ataqueJugador[i] == 'FUEGO' && ataqueEnemigo[i] == 'TIERRA'){

                indexAmbosOponentes(i, i);
                crearMensaje("GANASTE");
                victoriasJugador++
                spanVidasJugador.innerHTML = victoriasJugador   
            }else if(ataqueJugador[i] == 'AGUA' && ataqueEnemigo[i] == 'FUEGO'){

                indexAmbosOponentes(i, i);
                crearMensaje("GANASTE");
                victoriasJugador++
                spanVidasJugador.innerHTML = victoriasJugador
            }else if(ataqueJugador[i] == 'TIERRA' && ataqueEnemigo[i] == 'AGUA'){

                indexAmbosOponentes(i, i);
                crearMensaje("GANASTE");
                victoriasJugador++
                spanVidasJugador.innerHTML = victoriasJugador
            }else{
                indexAmbosOponentes(i, i);
                crearMensaje("PERDISTE");
                victoriasEnemigo++
                spanVidasEnemigo.innerHTML = victoriasEnemigo;
            }
    }
    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un EMPATE!!!!");
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal('Esto fue una VICTORIA!!!!')
    }else{
        crearMensajeFinal('PERDISTE WEON');
    }
}

function crearMensaje(resultado) {
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    resultadoVictoria = ""
    resultadoDerrota = ""
    if(resultado == "EMPATE"){
        resultadoVictoria = "😒"
        resultadoDerrota = "😒"
    }else if(resultado == "GANASTE"){
        resultadoVictoria = "💚"
        resultadoDerrota = "❌"
    }else{
        resultadoVictoria = "❌"
        resultadoDerrota = "💚"
    }

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador + resultadoVictoria;
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo + resultadoDerrota;

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    
    sectionMensajes.innerHTML = resultadoFinal
    
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function pintarCanvas(){
    capipepo.x = capipepo.x + capipepo.velocidadX;
    capipepo.y = capipepo.y + capipepo.velocidadY;
    lienzo.clearRect(0, 0, mapa.width, mapa.height);
    lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
    lienzo.drawImage(capipepo.mapaFoto, capipepo.x, capipepo.y, capipepo.ancho, capipepo.alto)
}

function moverArriba(){
    capipepo.velocidadY = -5
}

function up(){
    capipepo.velocidadY = -5
}

function moverIzquierda(){
    capipepo.velocidadX = -5
}

function moverAbajo(){
    capipepo.velocidadY = 5
}

function moverDerecha(){
    capipepo.velocidadX = 5
}

function detenerMovimiento(){
    capipepo.velocidadX = 0
    capipepo.velocidadY = 0
}

function sePresionoUnaTecla(evento){
    switch(evento.key){
        case 'ArrowUp':
            up()
            break;
        
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;

        case 'ArrowRight':
            moverDerecha();
            break;
        default:
            break;
    }
}

function iniciarMapa(){

    mapa.width = 800
    mapa.height = 600

    intervalo = setInterval(pintarCanvas, 30)

    window.addEventListener("keydown", sePresionoUnaTecla)
    window.addEventListener("keyup", detenerMovimiento)
}

window.addEventListener('load', iniciarJuego)