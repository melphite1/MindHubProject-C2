const  express = require("express")
const gameController = require("../controllers/controllerGames")
const router = express.Router()



router.route("/games")
.post(gameController.addGame)

module.exports = router

