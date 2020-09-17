const Joi = require("@hapi/joi")

const validator = {
    validateData: (req, res, next) => {

        const schema = Joi.object({
            name: Joi.string().min(4).trim().required().error(() => { return { message: 'The name must contain more than 3 characters.', };}),
            lastname: Joi.string().min(4).trim().required().error(() => { return { message: 'Last name must contain more than 3 characters.', };}),
            username: Joi.string().min(4).trim().required().error(() => { return { message: 'The username must contain more than 3 characters.', };}),
            password: Joi.string().min(6).trim().required().error(() => { return { message: 'The password must contain more than 6 characters.', };}),
            email: Joi.string().email().trim().required().error(() => { return { message: 'The email must contain "@" and ".com, .net ..."' };}),
            urlpic: Joi.required(),
            logWithGoogle: Joi.boolean(),
            firstTime: Joi.boolean(),
            favConsole: Joi.string()
        })

        const validation = schema.validate(req.body, { abortEarly: false })
        if (validation.error !== undefined) {
            return res.json({
                success: false,
                error: ('hola'),
                message: validation.error
            })
        }
        next()
    }
}


module.exports = validator