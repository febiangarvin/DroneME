const { mysqldb } = require('./../connections')

module.exports = {

    // //============================== Add Cart ============================================================// //

    userAddCart: (req, res) => {
        // //get data from frontend
        const data = {
            idproducts: req.body.dataProduct.idproducts,
            idusers: parseInt(req.body.idusers),
            quantity: 1,
            totalprice: parseInt(req.body.dataProduct.productprice) * 1,
            paymentstatus: 'cart'
        }
        // //set sql fro database
        let sql = 'INSERT INTO transactions SET ?'

        // //database actions
        mysqldb.query(sql, data, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1.insertId })
        })
    },

    userAddCheckout: (req, res) => {
        const data = {
            idproducts: req.body.dataProduct.idproducts,
            idusers: parseInt(req.body.idusers),
            quantity: req.body.dataProduct.quantity,
            totalprice: parseInt(req.body.dataProduct.productprice) * parseInt(req.body.dataProduct.quantity),
            paymentstatus: 'checkout',
            address: req.body.dataProduct.address,
            province: req.body.dataProduct.province,
            postalcode: parseInt(req.body.dataProduct.postalcode),
            receiver: req.body.dataProduct.receiver,
            iduniquetransactions: parseInt(Math.random() * 100)
        }

        let sql = 'INSERT INTO transactions SET ?'

        mysqldb.query(sql, data, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1.insertId })
        })
    },

    userAddOrders: (req, res) => {
        const path = '/orders/images'
        const upload = uploader(path, 'transactions').fields([{ name: 'image' }])

        upload(req, res, err => {
            if (err) {
                return res
                    .status(500)
                    .json({ message: 'Upload Fail', error: err.message })
            }

            const { image } = req.files
            const imagePath = image ? path + '/' + image[0].filename : null

            const data = JSON.parse(req.body.products)
            data.productimage = imagePath

            const data = {
                idproducts: req.body.dataProduct.idproducts,
                idusers: parseInt(req.body.idusers),
                quantity: req.body.dataProduct.quantity,
                totalprice: parseInt(req.body.dataProduct.totalprice),
                paymentstatus: 'On Process',
                address: req.body.dataProduct.address,
                province: req.body.dataProduct.province,
                postalcode: parseInt(req.body.dataProduct.postalcode),
                receiver: req.body.dataProduct.receiver,
                iduniquetransactions: parseInt(req.body.dataProduct.iduniquetransactions),
            }

            let sql = 'INSERT INTO transactions SET ?'

            mysqldb.query(sql, data, (err, res1) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send({ result: res1.insertId })
            })
        })
    },

    // //============================== Read Users ============================================================// //

    getUsers: (req, res) => {
        var sql = 'SELECT u.username, u.email, u.verification FROM users u WHERE u.idroles=1;'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetCart: (req, res) => {
        // //get data from frontend
        const { id } = req.params
        // //set SQL for database
        let sql = `SELECT t.*, p.productname, p.productprice FROM transactions t JOIN products p ON p.idproducts = t.idproducts WHERE t.idusers = ${id} AND t.paymentstatus='cart'`
        // //database actions
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetCheckout: (req, res) => {
        // //get data from frontend
        const { id } = req.params
        // //set SQL for database
        let sql = `SELECT t.*, p.productname, p.productprice FROM transactions t JOIN products p ON p.idproducts = t.idproducts WHERE t.idusers = ${id} AND t.paymentstatus='checkout'`
        // //database actions
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetOrders: (req, res) => {
        // //get data from frontend
        const { id } = req.params
        // //set SQL for database
        let sql = `SELECT t.*, p.productname, p.productprice FROM transactions t JOIN products p ON p.idproducts = t.idproducts WHERE t.idusers = ${id} AND t.paymentstatus='On Process' AND t.paymentstatus='Delivered'`
        // //database actions
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    // //============================== Delete Cart ============================================================// //

    userDeleteCart: (req, res) => {
        let sql = `DELETE FROM transactions WHERE idtransactions = ${req.params.id}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userDeleteCheckout: (req, res) => {
        let sql = `DELETE FROM transactions WHERE iduniquetransactions = ${req.params.id}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    // //============================== Post Cart To Checkout ==================================================// //



}