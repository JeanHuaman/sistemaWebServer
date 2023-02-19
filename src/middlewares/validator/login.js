const Joi = require("joi")

const validator = (schema) => (payload) => 
schema.validate(payload,{abortEarly:false})


const loginSchema = Joi.object({
    user: Joi.string().required().min(3).max(20).pattern(new RegExp('^[a-zA-ZñÑ0-9]{3,20}$')),
    pass:Joi.string().required().min(3).max(20).pattern(new RegExp('^[a-zA-ZñÑ0-9]{3,20}$'))
})

exports.validateLogin = validator(loginSchema)