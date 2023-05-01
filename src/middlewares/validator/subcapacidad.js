const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const subcapacidadSchema = Joi.array().items(
    Joi.object({
    id_registro:Joi.number().required(),
    id_alumno:Joi.number().required(),
    numero_bimestre:Joi.number().required(),
    id_capacidad:Joi.number().required(),
    id_subcapacidad:Joi.number().required(),
    nota_subcapacidad: Joi.string().allow("").pattern(new RegExp('^.{0,2}$'))
}))

exports.validateSubcapacidad = validator(subcapacidadSchema)