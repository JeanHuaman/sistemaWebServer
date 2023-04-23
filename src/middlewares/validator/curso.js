const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const cursoSchema = Joi.object({
    id_curso:Joi.allow(),
    nombre : Joi.string().required().pattern(new RegExp('^.{1,45}$')),
    capacidades:Joi.array().required().items(Joi.object({
        id_capacidad : Joi.allow(),
        nombre_capacidad : Joi.string().required().pattern(new RegExp('^.{1,100}$')),
        subcapacidades:Joi.array().required().items(Joi.object({
            id_subcapacidad:Joi.allow(),
            nombre_subcapacidad : Joi.string().required().pattern(new RegExp('^.{1,150}$'))
        })).has(Joi.object({ id_subcapacidad: Joi.allow(), nombre_subcapacidad: Joi.string()}))
    })).has(Joi.object({ id_capacidad: Joi.allow(), nombre_capacidad: Joi.string(),subcapacidades: Joi.array()}))
})


exports.validateCurso = validator(cursoSchema)