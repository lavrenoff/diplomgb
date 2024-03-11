// import uniqueId from 'lodash.uniqueid'
const db = require('../config/db')
const errorHandler = require('../utils/errorHandler')
// const uniqueId = require('lodash.uniqueid')
const uniqueId = require('vue-uuid');
// const uniqueId = require('lodash-es/uniqueId')

// const uniqueId = require('vue-unique-id');


module.exports.create = async function (req, res) {
    try {
        const uq = uniqueId.uuid.v4();
        const today = new Date().toLocaleDateString();

        const sql = `insert into placing (delivery_method,dt,tm,period_of_time,recipient,recipient_name,recipient_tel,recipient_city,recipient_adress,recipient_note,contact_name,contact_tel,contact_city,payment,uniqueId,create_date,id_users) values (${req.body.placing.delivery_method},'${req.body.placing.dt}','${req.body.placing.tm}',${req.body.placing.period_of_time},${req.body.placing.recipient},'${req.body.placing.recipient_name}','${req.body.placing.recipient_tel}','${req.body.placing.recipient_city}','${req.body.placing.recipient_adress}','${req.body.placing.recipient_note}','${req.body.placing.contact_name}','${req.body.placing.contact_tel}','${req.body.placing.contact_city}',${req.body.placing.payment},'${uq}','${today}',${req.body.placing.id_users})`;
        // console.log(sql);
        await db.pool.query(sql);

        const result = await db.pool.query(`select kod from placing where uniqueId='${uq}'`);

        const kod = result[0].kod;


        for (let i = 0; i < req.body.cart.length; i++) {
            let price = 0;

            if (req.body.cart[i].idprice === 0) {
                price = req.body.cart[i].price;
            }
            else
                if (req.body.cart[i].idprice === 1) {
                    price = req.body.cart[i].pricesvg;
                }
                else {
                    price = req.body.cart[i].pricebig;
                }


            const sql1 = `insert into addOrders (name,price,priceid,quantity,kod_placing) values ('${req.body.cart[i].name}',${price},${req.body.cart[i].idprice},${req.body.cart[i].quantity},${kod})`;

            await db.pool.query(sql1);
        }







        res.status(200).json({
            message: 'Успешно добавлен в таблицу placing'
        })
    } catch (err) {
        errorHandler(res, err)
    }
}

module.exports.update = async function (req, res) {
    try {
        await db.pool.query(`update review set name='${req.body.name}',email='${req.body.email}',city='${req.body.city}',comment='${req.body.comment}',type_review=${req.body.type_review},grade=${req.body.grade} where kod=${req.body.id}`)
        res.status(200).json({
            message: 'Успешно изменено в таблице review'
        })
    } catch (err) {
        errorHandler(res, err)
    }
}