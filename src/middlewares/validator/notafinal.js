const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const notaFinalSchema = Joi.array().items(
    Joi.object({
    id_registro:Joi.number().required(),
    id_alumno:Joi.number().required(),
    nota_final: Joi.string().allow("").pattern(new RegExp('^.{0,2}$'))
}))

exports.validateNotaFinal = validator(notaFinalSchema)