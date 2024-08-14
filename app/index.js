const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send({ ola: "seja bem-vindo" });
});

// Rota para servir a página HTML
app.get('/pagina', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota GET para enviar um objeto JSON
app.get("/receber", (req, res) => {
    const objeto = { nome: "João", idade: 30, cidade: "São Paulo" };
    res.json(objeto);
});

app.listen(port, () => {
    console.log(`API e página rodando na porta ${port}`);
});
