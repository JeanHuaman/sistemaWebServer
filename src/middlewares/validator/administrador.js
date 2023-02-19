const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const administradorSchema = Joi.object({
    usuario: Joi.string().required().min(3).max(20).pattern(new RegExp('^[a-zA-ZñÑ0-9]{3,20}$')),
    contrasena:Joi.string().required().min(3).max(20).pattern(new RegExp('^[a-zA-ZñÑ0-9]{3,20}$')),
    nombre : Joi.string().required().pattern(new RegExp('^[a-zA-ZñÑ áéíóú]+$')),
    apellido : Joi.string().required().pattern(new RegExp('^[a-zA-ZñÑ áéíóú]+$')),
    edad : Joi.number().required().min(0),
    email: Joi.string().min(0).required("").email(),
    celular : Joi.number().min(0).required(""),
    rol : Joi.string().required().pattern(new RegExp('^[a-zA-ZñÑ]+$'))
})

exports.validateUsuario = validator(administradorSchema)