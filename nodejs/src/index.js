const express = require("express");
const { v4 } = require("uuid");

const app = express();

/**
 * CPF - STRING
 * NAME - STRING
 * ID - UUID(IDENTIFICADOR ÚNICO UNIVERSAL)
 * STATEMENT(EXTRATO/LANÇAMENTOS) - []
 */

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;
});

app.listen(3333);
