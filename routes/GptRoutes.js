const express = require('express')
const { TextGeneration } = require('../controllers/ChatGptController')

const router    =   express.Router()
router.post('/', (req, res) => {
    res.status(200).json('we\'re here')
})
router.post('/text-generation', TextGeneration)

module.exports = router