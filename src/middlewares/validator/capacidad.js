const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const capacidadSchema = Joi.array().items(
    Joi.object({
    id_registro:Joi.number().required(),
    id_alumno:Joi.number().required(),
    numero_bimestre:Joi.number().required(),
    id_capacidad:Joi.number().required(),
    nota_capacidad: Joi.string().allow("").pattern(new RegExp('^.{0,2}$'))
}))

exports.validateCapacidad = validator(capacidadSchema)