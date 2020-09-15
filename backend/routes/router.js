const express = require("express")
const passport = require("../config/passport")
const validator = require("../config/validator")
const gameController = require("../controllers/controllerGames")
const usersController = require("../controllers/controllerUsers")
const newsController = require("../controllers/controllerNews")
const router = express.Router()

router.route("/games")
    .get(gameController.getListGames)
    .post(gameController.addGame)

router.route('/games/:category')
    .get(gameController.getListGamesCategory)

router.route('/user')
    .post(validator.validateData, usersController.createAccount)

router.route('/login')
    .post(usersController.userLogin)

router.route('/tokenVerificator')
    .get(passport.authenticate('jwt', { session: false }), usersController.tokenVerificator)

router.route('/news/comments')
    .post(passport.authenticate('jwt', { session: false }), newsController.putCommentary)
    .get(newsController.getCommentaries)

router.route('/news/deleteCommentary')
    .put(newsController.deleteCommentary)

router.route('/news/modifyCommentary')
    .put(newsController.modifyCommentary)

router.route('/setConsole')
    .put(usersController.setConsole)
router.route('/news')
    .post(newsController.addNews)
    .get(newsController.getNews)


module.exports = router

