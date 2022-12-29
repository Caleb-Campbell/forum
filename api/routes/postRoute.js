const router = require('express').Router()
const data = require('./data/data.js')


router.get('/', (req, res) => {
    res.status(200).json(data)
})

router.post('/', (req, res) => {
    const {author, text} = req.body
    const newPost = {
        author: author,
        text: text
    }
    data.posts.push(newPost)
})

module.exports = router