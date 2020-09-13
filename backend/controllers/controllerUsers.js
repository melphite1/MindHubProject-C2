const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")



const usersController = {

    createAccount: async (req, res) => {
        const { username, password, email, firstname, lastname, country, urlpic, favConsole } = req.body

        const passwordHash = bcryptjs.hashSync(password.trim(), 10)
        const userExists = await User.findOne({ username: username })

        if (userExists) {
            res.json({ success: false, message: "Username already use" })
        } else {

            const newUser = new User({ firstname, lastname, email, username, password: passwordHash, urlpic, country, favConsole })

            const user = await newUser.save()
            jwt.sign({ ...newUser }, process.env.SECRETORKEY, {}, (error, token) =>{

                if (error) {
                    res.json({ success: false, error })
                } else {
                    console.log("usuario nuevo")
                    res.json({ success: true, token, urlpic: newUser.urlpic, username: newUser.username })
                }
            

            }
            )
        }
    },

    userLogin: async (req, res) => {
        const { username, password } = req.body

        const userExist = User.findOne({ username })

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

                        res.json({ success: true, token, picurl: userExist.picurl, username: userExist.username })
                    }
                })
            }

        }



    }

}


module.exports = usersController