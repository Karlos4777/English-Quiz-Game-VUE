// Importa la libreria Express
const express = require("express");

// Crea una nueva apliacion express
const app = express();

// Permite que el frontend, haga peticiones al backend
const cors = require("cors");

//Puerto por donde se va escuchar el servidor
const PORT =3000;

//Carga el archillo questions.json que contiene todas las preguntas
const questions = require("./questions.json");

//Activa el uso del middleware en toda la apliacion /app
app.use(cors());

app.get("/questions", (req, res) => {

    res.json(questions);
})

app.listen(PORT, () => {
    console.log(`Server ejecutandose en el puerto ${PORT}`);
})