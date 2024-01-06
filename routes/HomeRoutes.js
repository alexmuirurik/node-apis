const express = require('express')
const { TextGeneration } = require('../controllers/ChatGptController')
const { AlexMuiruriPosts } = require('../controllers/HomeController')

const router    =   express.Router()
router.post('/', AlexMuiruriPosts)
router.post('/text-generation', TextGeneration)

module.exports = router