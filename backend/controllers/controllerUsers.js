const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { findByIdAndUpdate } = require("../models/User")



const usersController = {

    createAccount: async (req, res) => {
        const { username, password, email, name, lastname, logWithGoogle, firstTime, urlpic, favConsole } = req.body
        const passwordHash = bcryptjs.hashSync(password.trim(), 10)
        const userExists = await User.findOne({ username: username })

        if (userExists) {
            res.json({ success: false, message: "Username already use" })
        } else {
            console.log(req.files)
            const archivo = req.files.urlpic
            const nombreArchivo = req.body.username
            const serverURL = `uploads/${nombreArchivo}`

            archivo.mv(serverURL)

            const photoUrl = `http://localhost:4000/uploads/${nombreArchivo}`

            const newUser = new User({ name, lastname, email, username, password: passwordHash, logWithGoogle, urlpic: photoUrl, firstTime, favConsole })

            const user = await newUser.save()

            jwt.sign({ ...newUser }, process.env.SECRETORKEY, {}, (error, token) => {

                if (error) {
                    res.json({ success: false, error })
                } else {
                    res.json({ success: true, token, urlpic: newUser.urlpic, name: newUser.name, lastName: newUser.lastname, favConsole: newUser.favConsole, email: newUser.email })
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
                success: false, message: "Incorrect username or password"
            })
        } else {
            const passwordMatches = bcryptjs.compareSync(password, userExist.password)

            if (!passwordMatches) {
                res.json({
                    success: false, message: "Incorrect username or password"
                })
            } else if (userExist.logWithGoogle && !req.body.logInMethod) {
                res.json({
                    success: false, message: "You can't login here"
                })
            }
            else {
                jwt.sign({ ...userExist }, process.env.SECRETORKEY, {}, (error, token) => {
                    if (error) {
                        res.json({ success: false, error: "Ha ocurrido un error" })
                    } else {

                        res.json({ success: true, token, urlpic: userExist.urlpic, username: userExist.username, name: userExist.name, firstTime: userExist.firstTime, lastName: userExist.lastname, favConsole: userExist.favConsole, email: userExist.email })
                    }
                })
            }

        }
    },
    tokenVerificator: (req, res) => {

        const { name, urlpic, username, firstTime, lastname, favConsole } = req.user
        console.log(req.user)
        res.json({
            success: true,
            name,
            urlpic,
            username,
            firstTime,
            lastname,
            favConsole
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