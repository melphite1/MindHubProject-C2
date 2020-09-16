const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { findByIdAndUpdate } = require("../models/User")



const usersController = {

    createAccount: async (req, res) => {
        const { username, password, email, name, lastname, logWithGoogle, firstTime, favConsole } = req.body

        console.log(req.body)
        console.log(req.files.urlpic)
        const passwordHash = bcryptjs.hashSync(password.trim(), 10)
        const userExists = await User.findOne({ username: username })

        if (userExists) {
            res.json({ success: false, message: "Username already use" })
        } else {
            const archivo = req.files.urlpic
            const nombreArchivo = req.files.urlpic.name
            const serverURL =`${__dirname}/Uploads/${nombreArchivo}`
     
            archivo.mv(serverURL)
            const newUser = new User({ name, lastname, email, username, password: passwordHash, logWithGoogle, firstTime, favConsole })
     
           
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

        const userExist = await User.findOne({ username })

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

                        res.json({ success: true, token, urlpic: userExist.urlpic, username: userExist.username, name: userExist.name, firstTime: userExist.firstTime })
                    }
                })
            }

        }
    },
    tokenVerificator: (req, res) => {

        const { name, urlpic, username, firstTime } = req.user
 
        res.json({
            success: true,
            name,
            urlpic,
            username,
            firstTime
        })
    },
    setConsole: async (req, res) => {
        const { favConsole, username } = req.body

        const user = await User.findOneAndUpdate({
            username
        }, {
            favConsole,
            firstTime: false
        }, {
            returnNewDocument: true
        })


    }

}


module.exports = usersController