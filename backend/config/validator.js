const Joi = require("@hapi/joi")



const validator = {
    validateData: (req, res, next) => {

        const schema = Joi.object({
            firstname: Joi.string().required().trim(),
            lastname: Joi.string().required().trim(),
            email: Joi.string().email().trim(),
            password: Joi.string().trim().required(),
            username: Joi.string().trim().min(4).required(),
            urlpic: Joi.string().trim().required(),
            country: Joi.string(),
            favConsole:Joi.string(),
            favGames: Joi.array()
           
        })

        const validation = schema.validate(req.body)
        if (validation.error !== undefined) {
            return res.json({
                success: false,
                error: "La contraseña tiene que tener mayusculas, minusculas y numeros",
                message: validation.error
            })
        }
    
  
        next()
    }
}


module.exports = validator