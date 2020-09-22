const path = require("path")
const express = require("express")
require("dotenv").config()
require("./config/cnx-bd")
const cors = require("cors")
const app = express()
const router = require("./routes/router")
const fileUpload = require("express-fileupload")

app.use('/uploads', express.static(`${__dirname}/uploads`))

app.use(express.json())
app.use(cors())
app.use(fileUpload())

app.use(express.static("uploads"))
app.use("/api", router)

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req, res) =>{
        res.sendFile(path.join(__dirname + "/client/build/index.html"))
    })
}



const port = process.env.PORT
const host = process.env.HOST || "0.0.0.0"

app.listen(port, host, () => console.log("Server listening  on port " + port))