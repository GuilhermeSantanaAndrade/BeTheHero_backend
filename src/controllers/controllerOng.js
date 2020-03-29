const connection = require("../database/connection");
const { prepareSuccess200 } = require("../utils/responses_struct");

module.exports.create = async (req, res, next) => {
  let { id, name, email, whatsapp, city, uf } = req.body;

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
