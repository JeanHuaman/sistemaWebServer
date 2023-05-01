const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const bimestreSchema = Joi.array().items(
    Joi.object({
    id_registro:Joi.number().required(),
    id_alumno:Joi.number().required(),
    numero_bimestre:Joi.number().required(),
    nota_bimestre: Joi.string().allow("").pattern(new RegExp('^.{0,2}$'))
}))

exports.validateBimestre = validator(bimestreSchema)