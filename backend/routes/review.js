const express = require('express')
const review = require('../controllers/review')
const router = express.Router()

router.get('/', review.getAll)
router.get('/:id', review.getById)
router.delete('/:id', review.remove)
router.post('/', review.create)
router.patch('/', review.update)

module.exports = router