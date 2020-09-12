const express = require("express")
require("dotenv").config()
require("./config/cnx-bd")
const cors = require("cors")
const app = express()
const router = require("./routes/router")

app.use(express.json())
app.use(cors())

app.use("/api", router)


const port = process.env.PORT
const host = process.env.HOST || "0.0.0.0"

app.listen(port, host, () => console.log("Server listening  on port " + port))