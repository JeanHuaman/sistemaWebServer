const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const foroComentarioSchema = Joi.object({
    id_foro:Joi.number(),
    id_usuario: Joi.number(),
    comentario:Joi.string().required().pattern(new RegExp('^.{1,255}$')),
    fecha_comentario : Joi.string().required().pattern(new RegExp('^.{1,55}$')),
    nombre_usuario_comentador : Joi.string().required().pattern(new RegExp('^[A-Za-z0-9ÑñÁáÉéÍíÓóÚúÜü\\s]+$')),
    rol : Joi.string().required().pattern(new RegExp('^[a-zA-ZñÑ]+$'))
})

exports.validateComentarioForo = validator(foroComentarioSchema)