const Game = require("../models/Game")

const gameController = {
    addGame:  (req, res) => {
        const {  title,images,body,rating,platforms,idComment} = req.body
        const gameSave = new Game({
            title,images,body,rating,platforms,idComment
        })

        gameSave.save()
        .then(game => res.json({succes: true, game}))
        .catch( error =>res.json({succes: false, error}))
    }
}

module.exports = gameController