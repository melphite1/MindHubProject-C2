const News = require('../models/News')

const controllerNews = {
    addNews: (req, res) => {
        const {title, subtitle, body, images, date, commentID} = req.body
        const newsSave = new News ({
            title, subtitle, body, images, date, commentID
        })

        newsSave.save()
        .then(news => res.json({succes: true, news}))
        .catch(error => res.json({succes:false, error}))
    },

    getNews: async (req, res) => {
        const news = await News.find()
        res.json({ succes:true, news})
    }
}

module.exports = controllerNews