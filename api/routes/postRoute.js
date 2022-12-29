const router = require('express').Router()

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'successful fetch',
        posts: [{author: 'Admin', text: 'Hey there bbgurl'}, {author: 'Response', text: 'Hey there bbgurl back at you'}]
        
    })
})

module.exports = router