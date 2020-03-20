const { mysqldb } = require('./../connections')

module.exports = {

    // //============================== CREATE FUNCTION =======================================================// //

    userAddCart: (req, res) => {
        // //get data from frontend
        console.log(req.body)
        const data = {
            idproducts: req.body.idproducts,
            idusers: parseInt(req.body.idusers),
            quantity: req.body.quantity,
            paymentstatus: 'cart'
        }
        // //set sql fro database
        let sql = 'INSERT INTO transactiondetails SET ?'

        // //database actions
        mysqldb.query(sql, data, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1.insertId })
        })
    },

    userAddCheckout: (req, res) => {

        const quantities = []

        const newData = []

        req.body.dataProduct.forEach(val => { // //melakukan push quantity product ke array baru (quantities)
            quantities.push(val.quantity)
            newData.push(val.idproducts)
        });

        let sql = `UPDATE transactiondetails SET ? WHERE idproducts = ${newData} idusers = ${id} AND paymentstatus = 'cart'`

        mysqldb.query(sql, quantities, (err, res1) => {
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

            // const data = JSON.parse(req.body.products)
            data.productimage = imagePath

            const data = {
                idproducts: req.body.dataProduct.idproducts,
                idusers: parseInt(req.body.idusers),
                quantity: req.body.dataProduct.quantity,
                price: parseInt(req.body.dataProduct.price),
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

    // //============================== READ FUNCTION =========================================================// //

    userGetCart: (req, res) => {
        // //get data from frontend
        const { id } = req.params
        // //set SQL for database
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts WHERE td.idusers = ${id} AND td.paymentstatus='cart'`
        // //database actions
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetReceiver: (req, res) => {
        const { id } = req.params
        let sql = `SELECT username, address, province, postalcode FROM users WHERE idusers = ${id}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetCheckout: (req, res) => {
        // //get data from frontend
        const { id } = req.params
        // //set SQL for database
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts WHERE td.idusers = ${id} AND td.paymentstatus='checkout'`
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
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts WHERE td.idusers = ${id} AND td.paymentstatus='On Process' AND td.paymentstatus='Delivered'`
        // //database actions
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    // //============================== DELETE FUNCTION =======================================================// //

    userDeleteCart: (req, res) => {
        let sql = `DELETE FROM transactiondetails WHERE idtransactiondetails = ${req.params.id}`
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