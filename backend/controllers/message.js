const db = require('../config/db')
const errorHandler = require('../utils/errorHandler')



// module.exports.remove = async function (req, res) {
//     try {
//         await db.pool.query(`delete from review where kod=${req.params.id}`)
//         res.status(200).json({
//             message: 'Успешно удален в таблице review'
//         })
//     } catch (err) {
//         errorHandler(res, err)
//     }
// }

module.exports.create = async function (req, res) {
    try {
        console.log(req.body)
        const sql = `insert into messages (name,comment,tel,email) values ('${req.body.name}','${req.body.comment}','${req.body.tel}','${req.body.email}')`;

        // console.log(sql);
        await db.pool.query(sql);

        res.status(200).json({
            message: 'Успешно добавлен в таблицу message'
        })
    } catch (err) {
        errorHandler(res, err)
    }
}

// module.exports.update = async function (req, res) {
//     try {
//         await db.pool.query(`update review set name='${req.body.name}',email='${req.body.email}',city='${req.body.city}',comment='${req.body.comment}',type_review=${req.body.type_review},grade=${req.body.grade} where kod=${req.body.id}`)
//         res.status(200).json({
//             message: 'Успешно изменено в таблице review'
//         })
//     } catch (err) {
//         errorHandler(res, err)
//     }
// }