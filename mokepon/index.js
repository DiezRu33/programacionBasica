// importar JS
const express = require('express');
const cors = require('cors');
const port = 8080

// crear APP
const app = express();

// servir archivo estatico html, css, js, img, etc...
app.use(express.static('public'))

app.use(cors());

// activa el formato JSON
app.use(express.json());

const jugadores = []

class Jugador{
    constructor(id){
        this.id = id;
    }

    asignarMokepon(mokepon){
        this.mokepon = mokepon;
    }

    actualizarPosicion(x, y){
        this.x = x;
        this.y = y;
    }

    asignarAtaques(ataques){
        this.ataques = ataques;
    }
}

class Mokepon{
    constructor(nombre){
        this.nombre = nombre;
    }

}

// url, responda
app.get('/unirse', (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id);

    jugadores.push(jugador);

    // permitir cualquier origen para el servidor
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

// endpoint de tipo POST
app.post("/mokepon/:jugadorId", (req, res) => {
    // extraer del URL con params
    const jugadorId = req.params.jugadorId || ""; // captura parametros de la URL;
    const nombre = req.body.mokepon || ""; // captura parametros del cuerpo de la solicitud (request);
    const mokepon = new Mokepon(nombre);
    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarMokepon(mokepon);
    }

    console.log(jugadores);
    console.log(jugadorId);
    res.end()
})

app.post('/mokepon/:jugadorId/posicion', (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const x = req.body.x || 0;
    const y = req.body.y || 0;

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].actualizarPosicion(x, y);
    }

    const enemigos = jugadores.filter((jugador) => {return jugadorId !== jugador.id && jugador.mokepon});

    res.send({
        enemigos
    })
});

app.post('/mokepon/:jugadorId/ataques', (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const ataques = req.body.ataques || [];

    const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id);

    if(jugadorIndex >= 0){
        jugadores[jugadorIndex].asignarAtaques(ataques);
    }

    res.end()

});

app.get('/mokepon/:jugadorId/ataques', (req, res) => {
    const jugadorId = req.params.jugadorId || "";
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        ataques: jugador.ataques || []
    })
})


// escuchar en puerto 8080 la req del cliente
app.listen(port, () => {
    console.log(`Servidor funcionando en el puerto ${port}`)
})