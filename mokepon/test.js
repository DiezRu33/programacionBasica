const express = require('express');

const port = 8080
const app = express();
let status = 200;

app.get('/', (req, res) => {
    res.status(status).send(`Servidor corriendo en puerto ${port}`);
})

app.listen(port, () => {
    console.log(`Estas escuchando por el puerto ${port}`)
})