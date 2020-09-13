const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")



const usersController = {

    createAccount: async (req, res) => {
        const { username, password, email, name, lastname, country, urlpic, favConsole } = req.body

        const passwordHash = bcryptjs.hashSync(password.trim(), 10)
        const userExists = await User.findOne({ username: username })

        if (userExists) {
            res.json({ success: false, message: "Username already use" })
        } else {

            const newUser = new User({ name, lastname, email, username, password: passwordHash, urlpic, country, favConsole })

            const user = await newUser.save()
            jwt.sign({ ...newUser }, process.env.SECRETORKEY, {}, (error, token) => {

                if (error) {
                    res.json({ success: false, error })
                } else {
                    console.log("usuario nuevo")
                    res.json({ success: true, token, urlpic: newUser.urlpic, name: newUser.name })
                }


            }
            )
        }
    },

    userLogin: async (req, res) => {
        const { username, password } = req.body
        console.log(req.body)
        const userExist = await User.findOne({ username })
        console.log(userExist.password)
        if (!userExist) {
            res.json({
                success: false, mensaje: "Usuario y/o contraseña incorrectos"
            })
        } else {
            const passwordMatches = bcryptjs.compareSync(password, userExist.password)

            if (!passwordMatches) {
                res.json({
                    success: false, mensaje: "Usuario y/o contraseña incorrectos"
                })
            } else {
                jwt.sign({ ...userExist }, process.env.SECRETORKEY, {}, (error, token) => {
                    if (error) {
                        res.json({ success: false, error: "Ha ocurrido un error" })
                    } else {

                        res.json({ success: true, token, picurl: userExist.picurl, username: userExist.username, name: userExist.name })
                    }
                })
            }

        }
    },
    tokenVerificator: (req, res) => {

        const { name, urlpic } = req.user
        console.log(req.user)
        res.json({
            success: true,
            name,
            urlpic
        })
    }
}


module.exports = usersController