const { mysqldb } = require('./../connections')
const { uploader } = require('./../helpers/uploader')
const fs = require('fs')

module.exports = {

    // //============================== CREATE FUNCTION =======================================================// //

    userAddCart: (req, res) => { // //get data from frontend
        console.log(req.body)
        const data = {
            idproducts: req.body.idproducts,
            idusers: parseInt(req.body.idusers),
            quantity: req.body.quantity,
            paymentstatus: 'cart'
        }

        let sql = 'INSERT INTO transactiondetails SET ?' // //set sql from database

        mysqldb.query(sql, data, (err, res1) => { // //database actions
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1.insertId })
        })
    },

    userAddCheckout: (req, res) => {
        const data = {
            idusers: parseInt(req.body.idusers),
            totalprice: parseInt(req.body.totalprice),
            paymentstatus: 'waiting for payment'
        }

        var sql = 'INSERT INTO transactions SET ?' // //set sql from database

        mysqldb.query(sql, data, (err, res1) => { // //database actions
            if (err) return res.status(500).send(err)
            const data2 = {
                idtransactions: res1.insertId,
                paymentstatus: 'waiting for payment'
            }

            var sql = `UPDATE transactiondetails SET ? WHERE idusers=${req.body.idusers} and paymentstatus='cart'`
            mysqldb.query(sql, data2, (err1, res2) => {
                if (err1) res.status(500).send(err1)
                return res.status(200).send('Added to Checkout')
            })
        })
    },

    // //============================== READ FUNCTION =========================================================// //

    userGetCart: (req, res) => {
        const { id } = req.params // //get data from frontend
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts WHERE td.idusers = ${id} AND td.paymentstatus='cart'` // //set SQL for database
        mysqldb.query(sql, (err, res1) => { // //database actions
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

    userGetUnpaidCheckout: (req, res) => {
        const { id } = req.params
        let sql = `SELECT idtransactions, totalprice, paymentstatus FROM transactions WHERE idusers = ${id} AND paymentstatus IN ('waiting for payment', 'Re-upload of payment needed')`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetPaidCheckout: (req, res) => {
        const { id } = req.params
        let sql = `SELECT idtransactions, totalprice, paymentstatus FROM transactions WHERE idusers = ${id} AND paymentstatus IN ('Payment Uploaded', 'Approved')`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetUnpaidCheckoutDetail: (req, res) => {
        const { id } = req.params // //get data from frontend
        // const { idtransactions } = req.params // //get data from frontend
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts WHERE td.idusers = ${id} AND td.paymentstatus IN ('waiting for payment', 'Re-upload of payment needed') AND td.idtransactions=${req.params.idtransactions}` // //set SQL for database
        console.log(req.params)
        mysqldb.query(sql, (err, res1) => { // //database actions
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetPaidCheckoutDetail: (req, res) => {
        const { id } = req.params // //get data from frontend
        // const { idtransactions } = req.params // //get data from frontend
        let sql = `SELECT td.*, p.productname, p.productprice, t.paymentimage FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts JOIN transactions t ON t.idtransactions=td.idtransactions WHERE td.idusers = ${id} AND td.paymentstatus IN ('Payment Uploaded', 'Approved') AND td.idtransactions=${req.params.idtransactions}` // //set SQL for database
        console.log(req.params)
        mysqldb.query(sql, (err, res1) => { // //database actions
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    // //============================== UPDATE FUNCTION =======================================================// //

    userAddPaymentImage: (req, res) => {
        const path = '/orders/paymentimage'
        const upload = uploader(path, 'transactions').fields([{ name: 'image' }])

        upload(req, res, err => {
            if (err) {
                return res
                    .status(500)
                    .json({ message: 'Upload Fail', error: err.message })
            }

            const { image } = req.files
            const imagePath = image ? path + '/' + image[0].filename : null

            const data = JSON.parse(req.body.data)
            console.log(data)
            data.paymentimage = imagePath

            // const data = {
            //     paymentstatus: 'Payment Uploaded',
            // }

            let sql = `UPDATE transactions SET ? WHERE idusers=${data.idusers} AND idtransactions=${data.idtransactions} AND paymentstatus='waiting for payment'`

            mysqldb.query(sql, data, (err, res1) => {
                if (err) return res.status(500).send(err)
                // return res.status(200).send({ result: res1 })
                const data2 = {
                    paymentstatus: 'Payment Uploaded'
                }

                var sql = `UPDATE transactiondetails SET ? WHERE idusers=${data.idusers} AND idtransactions=${data.idtransactions} AND paymentstatus='waiting for payment'`
                mysqldb.query(sql, data2, (err1, res2) => {
                    if (err1) res.status(500).send(err1)
                    return res.status(200).send('Transaction Updated')
                })
            })
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

}