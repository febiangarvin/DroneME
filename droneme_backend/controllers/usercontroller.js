const { mysqldb } = require('./../connections')
const { uploader } = require('./../helpers/uploader')
const fs = require('fs')

module.exports = {

    // //============================== CREATE FUNCTION =======================================================// //

    userAddCart: (req, res) => { // //function add product to cart
        const data = { // //variable data dengan data data tertentu beserta isinya
            idproducts: req.body.idproducts,
            idusers: parseInt(req.body.idusers),
            quantity: req.body.quantity,
            paymentstatus: 'cart'
        }

        let sql = 'INSERT INTO transactiondetails SET ?' // //set sql INSERT ke tabel

        mysqldb.query(sql, data, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1.insertId }) // //gunakan method insertId untuk menambah id pada tabel baru tersebut
        })
    },

    userAddCheckout: (req, res) => {
        const data = {
            idusers: parseInt(req.body.idusers),
            totalprice: parseInt(req.body.totalprice),
            paymentstatus: 'waiting for payment'
        }

        var sql = 'INSERT INTO transactions SET ?'

        mysqldb.query(sql, data, (err, res1) => {
            if (err) return res.status(500).send(err)
            // //buat variable data ke-2 untuk update tabel lain yang berkaitan (ONE TO MANY)
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

    userGetCart: (req, res) => { // //function untuk get cart
        const { id } = req.params // //variable parameter id yang mewakili idusers
        // //buat variable sql yang khusus mengambil type tertentu
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts WHERE td.idusers = ${id} AND td.paymentstatus='cart'`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetReceiver: (req, res) => { // //function untuk get user data
        const { id } = req.params // //variable parameter id yang mewakili idusers
        let sql = `SELECT username, address, province, postalcode FROM users WHERE idusers = ${id}` // //buat variable sql yang khusu mengambil type tertentu
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetUnpaidCheckout: (req, res) => { // //function untuk get checkout
        const { id } = req.params // //variable parameter id yang mewakili idusers
        // //buat variable sql yang khusu mengambil type tertentu
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

    userGetUnpaidCheckoutDetail: (req, res) => { // //function untuk get checkout detail
        const { id } = req.params // //variable parameter id yang mewakili idusers
        // const { idtransactions } = req.params // //get data from frontend
        // //buat variable sql yang khusu mengambil type tertentu, beserta parameter khusus dari id transactions (dibuat di frontend)
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts WHERE td.idusers = ${id} AND td.paymentstatus IN ('waiting for payment', 'Re-upload of payment needed') AND td.idtransactions=${req.params.idtransactions}`
        console.log(req.params)
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    userGetPaidCheckoutDetail: (req, res) => {
        const { id } = req.params // //get data from frontend
        // const { idtransactions } = req.params // //get data from frontend
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts WHERE td.idusers = ${id} AND td.paymentstatus IN ('Payment Uploaded', 'Approved') AND td.idtransactions=${req.params.idtransactions}` // //set SQL for database
        mysqldb.query(sql, (err, res1) => { // //database actions
            if (err) return res.status(500).send(err)
            sql = `SELECT t.idtransactions, t.paymentimage FROM transactions t WHERE t.idusers = ${id} AND t.idtransactions = ${req.params.idtransactions}`
            mysqldb.query(sql, (err1, res2) => {
                if (err1) return res.status(500).send(err1)
                return res.status(200).send({ result: res1, paymentimage: res2[0].paymentimage })
            })
        })
    },

    // //============================== UPDATE FUNCTION =======================================================// //

    userAddPaymentImage: (req, res) => { // //function add payment image
        const path = '/orders/paymentimage' // //variable path image product
        const upload = uploader(path, 'transactions').fields([{ name: 'image' }]) // //variable uploader yang diambil dari helper uploader

        upload(req, res, err => {
            if (err) { // //jika error
                return res.status(500).json({ message: 'Upload Fail', error: err.message })
            }

            const { image } = req.files // // variable object image yang berupa request dari files
            // //variable imagepath. Jika ada image-nya,maka dibuatkan path tambah "/" tambah filename dari image tersebut. Jika tidak ada, me-return null
            const imagePath = image ? path + '/' + image[0].filename : null

            const data = JSON.parse(req.body.data) // //variable data yang berisi product yang sudah di return dalam bentuk parse
            console.log(data)
            data.paymentimage = imagePath // //variable productimage berupa imagePath yang sudah dibuat di atas

            // const data = {
            //     paymentstatus: 'Payment Uploaded',
            // }

            // //variable sql untuk update transactions berdasarkan idtransactions
            let sql = `UPDATE transactions SET ? WHERE idusers=${data.idusers} AND idtransactions=${data.idtransactions} AND paymentstatus='waiting for payment'`
            mysqldb.query(sql, data, (err, res1) => {
                if (err) return res.status(500).send(err)
                // return res.status(200).send({ result: res1 })
                // //buat variable data ke-2 untuk update tabel lain yang berkaitan (ONE TO MANY)
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

    userDeleteCart: (req, res) => { // //function untuk delete cart
        // //variable sql untuk DELETE berdasarkan paramater (params) tabel idtransactiondetails
        let sql = `DELETE FROM transactiondetails WHERE idtransactiondetails = ${req.params.id}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

}