require("dotenv").config();
const bcrypt = require("bcryptjs");
const db = require("../config/db");
const jwt = require("jsonwebtoken");
const errorHandler = require("../utils/errorHandler");

module.exports.user = async function (req, res) {
    try {
        const results = await db.pool.query(
            `select * from users where id=${req.user[0].id}`
        );

        res.status(200).json({
            name: results[0].name,
            email: results[0].email,
            tel: results[0].tel,
            city: results[0].city,
            adress: results[0].adress,
            id: results[0].id,
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports.updateuser = async function (req, res) {
    try {
        await db.pool.query(`update users set name='${req.body.name}',tel='${req.body.tel}',city='${req.body.city}',adress='${req.body.adress}' where id=${req.user[0].id}`);


        res.status(201).json({
            message: "Успешно обновлен профиль",
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports.updatepassword = async function (req, res) {
    try {
        const results = await db.pool.query(
            `select * from users where id=${req.user[0].id}`
        );


        const passwordResult = bcrypt.compareSync(
            req.body.currentPassword,
            results[0].psw
        );

        if (passwordResult) {

            if (req.body.newPassword === req.body.confirmPassword) {
                const salt = bcrypt.genSaltSync(10);
                const password = req.body.newPassword;

                await db.pool.query(`update users set psw='${bcrypt.hashSync(password, salt)}' where id=${req.user[0].id}`);

                res.status(201).json({
                    message: "Успешно изменен пароль",
                });
            }
            else {
                res.status(401).json({
                    message: "Пароль не совпадает!",
                })
            }



        } else {
            res.status(401).json({
                message: "Текущий пароль не совпадает!",
            })
        }

        // await db.pool.query(`update users set name='${req.body.name}',tel='${req.body.tel}',city='${req.body.city}',adress='${req.body.adress}' where id=${req.user[0].id}`);


        // res.status(201).json({
        //     message: "Успешно обновлен профиль",
        // });
    } catch (err) {
        errorHandler(res, err);
    }
};


module.exports.myaddorders = async function (req, res) {
    try {
        const results = await db.pool.query(
            `select * from placing where id_users=${req.user[0].id}`
        );

        const data = [];

        let sum = 0;
        for (let i = 0; i < results.length; i++) {
            const results1 = await db.pool.query(
                `select * from addOrders where kod_placing=${results[i].kod}`
            );

            sum = 0;
            const data1 = [];
            for (let ii = 0; ii < results1.length; ii++) {
                let txt = ' (малый)';
                if (results1[ii].priceid === 1) {
                    txt = ' (средний)';
                }
                else
                    if (results1[ii].priceid === 2) {
                        txt = ' (большой)';
                    }


                const rsdata1 = {
                    name: results1[ii].name + txt,
                    price: results1[ii].price,
                    quantity: results1[ii].quantity,
                }

                sum = sum + (results1[ii].price * results1[ii].quantity);
                data1.push(rsdata1);
            }

            const rsdata = {
                dt: results[i].create_date,
                kod: results[i].kod,
                status: results[i].status,
                sum: sum,
                orders: data1,
            }

            data.push(rsdata);
        }
        // for (const place in results) {
        //     const rsdata = {
        //         dt: place,
        //         kod: place.kod,
        //         status: place.status,
        //     }

        //     console.log(rsdata);

        // }

        res.status(200).json({
            data: data,
        });

    } catch (err) {
        errorHandler(res, err);
    }
}
module.exports.login = async function (req, res) {
    try {
        const results = await db.pool.query(
            `select * from users where email='${req.body.email}'`
        );

        if (results.length > 0) {
            const passwordResult = bcrypt.compareSync(
                req.body.password,
                results[0].psw
            );
            if (passwordResult) {
                //Генерация токена
                const token = jwt.sign(
                    {
                        email: results[0].email,
                        id: results[0].id,
                    },
                    process.env.SECRET,
                    { expiresIn: 60 * 60 * 24 }
                ); //60-1 минута; 60*60=1 час; 60*60*24=24 часа

                // const token = jwt.sign({
                //     email: results[0].email,
                //     id: results[0].id
                // }, process.env.SECRET, {})

                res.status(200).json({
                    token: `Bearer ${token}`,
                    name: results[0].name,
                    email: results[0].email,
                    tel: results[0].tel,
                    city: results[0].city,
                    adress: results[0].adress,
                    id: results[0].id,
                });
            } else {
                res.status(401).json({
                    message: "Пароли не совпадают. Попробуйте снова",
                });
            }
        } else {
            res.status(404).json({
                message: "Пользователь с таким емайл не найден",
            });
        }
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports.register = async function (req, res) {
    try {
        const results = await db.pool.query(
            `select * from users where email='${req.body.email}'`
        );

        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;

        if (results.length > 0) {
            res.status(409).json({
                message: "Такой емайл существует. Попробуйте другой емайл",
            });
        } else {
            if (req.body.password === req.body.confirm_password) {
                try {
                    const result = await db.pool.query(
                        `insert into users (name,email,psw) values ('${req.body.name}','${req.body.email
                        }','${bcrypt.hashSync(password, salt)}')`
                    );

                    res.status(201).json({
                        message: "Успешно создан новый пользователь",
                    });
                } catch (err) {
                    errorHandler(res, err);
                }
            } else {
                res.status(409).json({
                    message: "Пароли не совпадают",
                });
            }
        }
    } catch (err) {
        errorHandler(res, err);
    }
};
