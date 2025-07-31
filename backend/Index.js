const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Importa las preguntas del archivo JSON
const questions = require('./questions.json');

// Middleware
app.use(cors());

// Ruta para obtener preguntas
app.get('/api/questions', (req, res) => {
    res.json(questions);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}/api/questions`);
});
