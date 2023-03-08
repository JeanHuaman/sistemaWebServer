const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const cursoSchema = Joi.object({
    id_curso:Joi.allow(),
    nombre : Joi.string().required().pattern(new RegExp('^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s0-9]+$')),
})


exports.validateCurso = validator(cursoSchema)