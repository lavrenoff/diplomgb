const express = require('express')
const placing = require('../controllers/placing')
const router = express.Router()

router.post('/', placing.create)

module.exports = router