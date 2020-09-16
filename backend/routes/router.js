const express = require("express")
const passport = require("../config/passport")
const validator = require("../config/validator")
const gameController = require("../controllers/controllerGames")
const usersController = require("../controllers/controllerUsers")
const newsController = require("../controllers/controllerNews")
const router = express.Router()

router.route("/games")
    .post(gameController.addGame)

router.route("/games/:id")
.get(gameController.getSpecificGames)

router.route("/category")
    .post(gameController.addCategory)
<<<<<<< HEAD
    .get(gameController.getListGamesCategory)
=======

router.route('/categories')
    .get(gameController.getCategories)
>>>>>>> d30f7a1ad127e12ab178455c7c48d462c43f6174

// router.route('/games/:category')
//     .get(gameController.getListGamesCategory)

router.route('/user')
    .post(validator.validateData, usersController.createAccount)

router.route('/login')
    .post(usersController.userLogin)

router.route('/tokenVerificator')
    .get(passport.authenticate('jwt', { session: false }), usersController.tokenVerificator)

router.route('/setConsole')
    .put(usersController.setConsole)

router.route('/news')
    .post(newsController.addNews)
    .get(newsController.getNews)

module.exports = router

