const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];

function verifyIfExistssAccountCpf(req, res, next) {
  const { cpf } = req.headers;

  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return res.status(400).json({ error: "Customer not found" });
  }

  req.customer = customer;

  return next();
}

/**
 * CPF - STRING
 * NAME - STRING
 * ID - UUID(IDENTIFICADOR ÚNICO UNIVERSAL)
 * STATEMENT(EXTRATO/LANÇAMENTOS) - []
 */

app.post("/account", (req, res) => {
  const { cpf, name } = req.body;

  const customerAlreadyExists = customers.some(
    (customer) => customer.cpf === cpf
  );

  if (customerAlreadyExists) {
    return res.status(400).json({ error: "Customer already exists!" });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return res.status(201).send();
});

// app.use(verifyIfExistssAccountCpf)

app.get("/statement/", verifyIfExistssAccountCpf, (req, res) => {
  const { customer } = req;
  return res.json(customer.statement);
});

app.listen(3333);
