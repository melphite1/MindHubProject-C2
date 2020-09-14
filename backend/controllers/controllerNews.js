const News = require('../models/News')

const controllerNews = {
    addNews: (req, res) => {
        const {title, subtitle, body, images, date} = req.body
        const newsSave = new News ({
            title, subtitle, body, images, date
        })

        newsSave.save()
        .then(news => res.json({succes: true, news}))
        .catch(error => res.json({succes:false, error}))
    }
}

module.exports = controllerNews