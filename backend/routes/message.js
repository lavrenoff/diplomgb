const express = require('express')
const message = require('../controllers/message')
const router = express.Router()

// router.get('/', message.getAll)
// router.delete('/:id', message.remove)
router.post('/', message.create)

module.exports = router