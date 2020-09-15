const Category = require("../models/Category")
const Game = require("../models/Game")

const gameController = {
    addGame:  (req, res) => {
        const {title,images,body,rating,platforms,idComment} = req.body
        const gameSave = new Game({
            title,images,body,rating,platforms,idCdomment
        })

        gameSave.save()
        .then(game => res.json({succes: true, game}))
        .catch( error =>res.json({succes: false, error}))
    },


    getCategories: async (req, res) => {
        const listCategories = await Category.find()
        res.json({
            success:true,
            listCategories: listCategories,
        })
    },

    addCategory: async (req, res) => {
        const {name,  picCategory} = req.body 

        const categorySave = new Category({name, picCategory})

        categorySave.save()
        .then(game => res.json({succes: true, game}))
        .catch( error =>res.json({succes: false, error}))
    },
    
    getSpecificGames: async (req, res) => {
        const specificGames = await Game.find({idCategory: req.params.id})
        console.log(specificGames)
        res.json({
            success:true,
            games: specificGames,
        })
    }
}

module.exports = gameController