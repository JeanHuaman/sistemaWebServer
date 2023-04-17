const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const foroSchema = Joi.object({
    id_foro:Joi.allow(),
    id_docente:Joi.number(),
    id_curso: Joi.number(),
    descripcion:Joi.string().required().pattern(new RegExp('^.{1,255}$')),
    fecha_creacion : Joi.string().required().pattern(new RegExp('^.{1,55}$')),
    fecha_fin : Joi.string().required().pattern(new RegExp('^.{1,55}$')),
    nombre_foro : Joi.string().required().pattern(new RegExp('^.{1,255}$')),
    grado: Joi.number().required().min(1).max(6),
    seccion : Joi.string().required().pattern(new RegExp('^[ABC]{1}$')),
    ciclo:Joi.string().required().pattern(new RegExp('^(primaria|secundaria)$')),
    activo_ciclo:Joi.number().required().min(0).max(1)
})

exports.validateForo = validator(foroSchema)