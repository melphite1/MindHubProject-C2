const Category = require("../models/Category")
const Game = require("../models/Game")
const Comment = require("../models/Comment")

const gameController = {
    addGame: (req, res) => {
        const { title, images, body, rating, platforms } = req.body
        const gameSave = new Game({
            title, images, body, rating, platforms
        })

        gameSave.save()
            .then(game => res.json({ succes: true, game }))
            .catch(error => res.json({ succes: false, error }))
    },


    getCategories: async (req, res) => {
        const listCategories = await Category.find()
        res.json({
            success: true,
            listCategories: listCategories,
        })
    },

    addCategory: async (req, res) => {
        const { name, picCategory } = req.body

        const categorySave = new Category({ name, picCategory })

        categorySave.save()
            .then(game => res.json({ succes: true, game }))
            .catch(error => res.json({ succes: false, error }))
    },

    getSpecificGames: async (req, res) => {
        const specificGames = await Game.find({ idCategory: req.params.id })
        console.log(specificGames)
        res.json({
            success: true,
            games: specificGames,
        })
    },
    putCommentary: async (req, res) => {
        console.log(req.body)
        const { idGame, content } = req.body
        const { username, urlpic } = req.user
        const newCommentary = new Comment({ content, userPic: urlpic, username, idGame })
        const commentary = await newCommentary.save()
        console.log(commentary)
        res.json({
            succes: true,
            commentary
        })
    },
    getCommentaries: async (req, res) => {
        const comment = await Comment.find()
        res.json({ succes: true, comment })
    },
    deleteCommentary: async (req, res) => {
        const { idComment } = req.body
        const commentaryDeleted = await Comment.findByIdAndDelete({
            _id: idComment
        })
        const comments = await Comment.find()
        res.json({
            success: true,
            comments
        })
    },
    modifyCommentary: async (req, res) => {
        console.log('este es el controlador para modificar')
        const { content, idComment } = req.body
        const commentaryDeleted = await Comment.findByIdAndUpdate({
            _id: idComment
        }, {
            content
        },
            {
                returnNewDocument: true
            })
        const comments = await Comment.find()
        res.json({
            success: true,
            comments
        })
    }
}

module.exports = gameController