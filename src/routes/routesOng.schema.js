const { celebrate, Joi, Segments } = require("celebrate");

module.exports.validation_create = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    whatsapp: Joi.string()
      .required()
      .regex(/^\d+$/),
    city: Joi.string().required(),
    uf: Joi.string().required()
  })
});

module.exports.validation_list = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
});

module.exports.validation_update = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  }),
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string()
      .required()
      .email(),
    whatsapp: Joi.string()
      .required()
      .regex(/^\d+$/),
    city: Joi.string().required(),
    uf: Joi.string().required()
  })
});

module.exports.validation_delete = celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.string().required()
  })
});
