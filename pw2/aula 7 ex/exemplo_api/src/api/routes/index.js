const express = require('express')
const router = express.Router()
const personagens = require('./personagens')

router.use(express.json())
router.use('/personagens', personagens)

module.exports = router