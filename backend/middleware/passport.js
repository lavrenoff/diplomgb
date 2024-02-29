require('dotenv').config()
const db = require('../config/db')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}

module.exports = passport => {
    passport.use(
        new JwtStrategy(options, async (payload, done) => {
            try {
                const results = await db.pool.query(`select email,id from users where id=${payload.id}`)

                const user = results;
                // console.log(user)
                if (user.length > 0) {
                    done(null, user)
                } else {
                    done(null, false)
                }

            } catch (err) {
                console.log(err)
            }


            // db.query('select email,id from users where id=?', [payload.id], (error, results) => {
            //     if (error) {
            //         console.log(error)
            //     }
            //     else {
            //         const user = results;

            //         if (user.length > 0) {
            //             done(null, user)
            //         } else {
            //             done(null, false)
            //         }

            //     }
            // })



        })
    )

}