const Joi = require("@hapi/joi")

// const errorMessage = (aMessage) => {
//     return res.json({message: aMessage})
// }

const validator = {
    validateData: (req, res, next) => {

        const schema = Joi.object({
            name: Joi.string().min(4).required().trim().error(() => { return res.json ({ message: 'The name must contain more than 3 characters.', });}),
            lastname: Joi.string().min(4).required().trim().error(() => { return res.json ({ message: 'Last name must contain more than 3 characters.', });}),
            username: Joi.string().min(4).trim().required().error(() => { return res.json ({ message: 'The username must contain more than 3 characters.', });}),
            password: Joi.string().min(6).trim().required().error(() => { return res.json ({ message: 'The password must contain more than 6 characters.', });}),
            email: Joi.string().email().required().trim().error(() => { return res.json ({ message: 'The email must contain "@" and ".com, .net ..."', });}),
            urlpic:Joi.string().error(() => { return res.json ({ message: 'The photo is an important part of your personality, dont forget it!', });}),
            logWithGoogle: Joi.boolean(),
            firstTime: Joi.boolean(),
            favConsole: Joi.string(),
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