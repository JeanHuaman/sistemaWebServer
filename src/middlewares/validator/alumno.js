const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const alumnoSchema = Joi.object({
    id_usuario:Joi.allow(),
    user: Joi.string().required().pattern(new RegExp('^[a-zA-ZñÑ0-9]{3,20}$')),
    password:Joi.string().required().pattern(new RegExp('^[a-zA-ZñÑ0-9]{3,20}$')),
    nombre : Joi.string().required().pattern(new RegExp('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$')),
    apellido : Joi.string().required().pattern(new RegExp('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$')),
    edad : Joi.number().required().min(0).allow(""),
    email: Joi.string().required().email().allow(""),
    celular : Joi.number().min(0).required().allow(""),
    rol : Joi.string().required().pattern(new RegExp('^[a-zA-ZñÑ]+$')),
    grado: Joi.number().required().min(1).max(6),
    seccion : Joi.string().required().pattern(new RegExp('^[ABC]{1}$')),
    ciclo:Joi.string().required().pattern(new RegExp('^(primaria|secundaria)$'))
})

exports.validateAlumno = validator(alumnoSchema)