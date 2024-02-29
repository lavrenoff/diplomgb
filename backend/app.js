// import UniqueId from 'vue-unique-id';
// const UniqueId = require('vue-unique-id')
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const reviewRoutes = require('./routes/review')
const placingRoutes = require('./routes/placing')
const msgRoutes = require('./routes/message')


const app = express()
// const db = require('../config/db')
require('dotenv').config()

// db.pool.getConnection().then(async conn => {
//     const res = await conn.pool.query('select * from users')
//     console.log(res)
// }
// )

// 
app.get('/', async (req, res) => {
    res.send(`Сервер запущен`);
})


app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('cors')())


app.use('/api/auth', authRoutes)
app.use('/api/review', reviewRoutes)
app.use('/api/placing', placingRoutes)
app.use('/api/message', msgRoutes)


module.exports = app