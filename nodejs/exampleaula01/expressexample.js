const express = require("express");

const app = express();

app.use(express.json());

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * PATCH - Alterar uma informação especifica
 * DELETE - Deletar uma informação no servidor
 */

/**
 * Tipos de parâmetros
 *
 * Route Params => Identificar um recurso,editar/deletar/buscar
 * Query Params => Utilizado para Paginação / Fitro de busca
 * Body Params => Os objetos que iremos passar para inserção/alteração(JSON)
 */

app.get("/courses", (req, res) => {
  const query = req.query;
  console.log("file: index.js:22  app.get  query", query);

  return res.json(["Curso 1", "Curso 2", "Curso 3"]);
  ("");
});

app.post("/courses", (req, res) => {
  const body = req.body;
  console.log("file: index.js:31  app.post  body", body);
  return res.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

app.put("/courses/:id", (req, res) => {
  const { id } = req.params;
  console.log("🚀 ~ file: index.js:29 ~ app.put ~ params", id);
  return res.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
});

app.patch("/courses/:id", (req, res) => {
  return res.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
});

app.delete("/courses:id", (req, res) => {
  return res.json(["Curso 6", "Curso 7", "Curso 4"]);
});

app.listen(3333);
