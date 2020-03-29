const connection = require("../database/connection");
const { prepareSuccess200 } = require("../utils/responses_struct");
const crypto = require("crypto");

module.exports.listAll = async (req, res, next) => {
  const result = await connection("ongs").select("*");

  return res.json(prepareSuccess200(result));
};

module.exports.list = async (req, res, next) => {
  let { id } = req.params;

  const result = await connection("ongs")
    .select("*")
    .where({ id: id });

  return res.json(prepareSuccess200(result));
};

module.exports.create = async (req, res, next) => {
  let { name, email, whatsapp, city, uf } = req.body;
  let id = crypto.randomBytes(6).toString("HEX");

  await connection("ongs").insert({
    id: id,
    name: name,
    email: email,
    whatsapp: whatsapp,
    city: city,
    uf: uf
  });

  return res.json(prepareSuccess200({ id: id }));
};

module.exports.update = async (req, res, next) => {
  let { name, email, whatsapp, city, uf } = req.body;
  let { id } = req.params;

  await connection("ongs")
    .update({
      name: name,
      email: email,
      whatsapp: whatsapp,
      city: city,
      uf: uf
    })
    .where({ id: id });

  return res.json(prepareSuccess200({ id: id }));
};

module.exports.delete = async (req, res, next) => {
  let { id } = req.params;

  await connection("ongs")
    .delete()
    .where({ id: id });

  return res.json(prepareSuccess200({ id: id }));
};
