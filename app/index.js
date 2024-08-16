const express = require("express");
const path = require("path");
const { connectToDatabase } = require("./configure/config"); // Importa a função de conexão
const app = express();
const port = 8080;

// Conecta ao MongoDB
connectToDatabase();

app.get("/", (req, res) => {
  res.send({ ola: "seja bem-vindo" });
});

// Rota para servir a página HTML index
app.get("/pagina", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota para servir a página HTML portifolio
app.get("/portifolio", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "portifolio.html"));
});

// Rota GET para enviar um objeto JSON
app.get("/receber", (req, res) => {
  const objeto = { nome: "João", idade: 30, cidade: "São Paulo" };
  res.json(objeto);
});

app.listen(port, () => {
  console.log(`API e página rodando na porta ${port}`);
});
