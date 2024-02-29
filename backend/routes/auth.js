const express = require('express')
const controller = require('../controllers/auth')
const passport = require('passport')
const router = express.Router()


// localhost:5000/api/auth/user
router.get('/user', passport.authenticate('jwt', { session: false }), controller.user)

// localhost:5000/api/auth/updateuser
router.post('/updateuser', passport.authenticate('jwt', { session: false }), controller.updateuser)

router.post('/updatepassword', passport.authenticate('jwt', { session: false }), controller.updatepassword)

router.get('/myaddorders', passport.authenticate('jwt', { session: false }), controller.myaddorders)

// localhost:5000/api/auth/login
router.post('/login', controller.login)
// localhost:5000/api/auth/register
router.post('/register', controller.register)

module.exports = router