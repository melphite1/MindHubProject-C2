const Category = require("../models/Category")
const Game = require("../models/Game")

const gameController = {
    addGame:  (req, res) => {
        const {title,images,body,rating,platforms,idCategory} = req.body
        const gameSave = new Game({
<<<<<<< HEAD
            title,images,body,rating,platforms,idCategory
=======
            title,images,body,rating,platforms,idCdomment
>>>>>>> d30f7a1ad127e12ab178455c7c48d462c43f6174
        })

        gameSave.save()
        .then(game => res.json({succes: true, game}))
        .catch( error =>res.json({succes: false, error}))
    },


<<<<<<< HEAD
        const listGames =  await Game.find()

        res.json({
            success: true,
            games: listGames,
        })
    },

    getListGamesCategory: async (req, res) => {
        const listGamesCategory = await Category.find()
=======
    getCategories: async (req, res) => {
        const listCategories = await Category.find()
>>>>>>> d30f7a1ad127e12ab178455c7c48d462c43f6174
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