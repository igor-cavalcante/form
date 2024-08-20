const express = require("express");
const path = require("path");
const { connectToDatabase } = require("./configure/config"); // Importa a função de conexão
const app = express();
const port = 8080;

// Conecta ao MongoDB
connectToDatabase();

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send({ ola: "seja bem-vindo" });
});

// Rota para servir a página HTML index
app.get("/pagina", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Rota para servir a página HTML do portifólio
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

// Rota para servir a página HTML portifolio
app.get("/portifolio", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "portifolio.html"));
});

app.listen(port, () => {
  console.log(`API e página rodando na porta ${port}`);
});
