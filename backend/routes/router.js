const express = require("express")
const passport = require("../config/passport")
const validator = require("../config/validator")
const gameController = require("../controllers/controllerGames")
const usersController = require("../controllers/controllerUsers")
const router = express.Router()

router.route("/games")
    .post(gameController.addGame)

router.route('/user')
    .post(validator.validateData, usersController.createAccount)

router.route('/login')
    .post(usersController.userLogin)

router.route('/tokenVerificator')
    .get(passport.authenticate('jwt', { session: false }), usersController.tokenVerificator)

module.exports = router

