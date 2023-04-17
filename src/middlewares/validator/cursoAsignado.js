const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const cursoAsignadoSchema = Joi.object({
    id_curso:Joi.number().required().min(0),
    nombre_curso : Joi.string().required().pattern(new RegExp('^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\\s]+$')),
    id_docente : Joi.number().required().min(0),
    nombre_docente : Joi.string().required().pattern(new RegExp('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$')),
    grado:Joi.number().required().min(1).max(6),
    seccion:Joi.string().required().pattern(new RegExp('^[ABC]{1}$')),
    ciclo:Joi.string().required().pattern(new RegExp('^(primaria|secundaria)$')),
    alumnos:Joi.array().required().items(Joi.object({
        id_alumno : Joi.number().required().min(0),
        nombre_alumno : Joi.string().required().pattern(new RegExp('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$')),
    })).has(Joi.object({ id_alumno : Joi.number(), nombre_alumno: Joi.string()}))
})


exports.validateCursoAsignado = validator(cursoAsignadoSchema)