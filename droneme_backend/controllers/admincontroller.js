const { mysqldb } = require('./../connections')

module.exports = {

    // //============================== CREATE FUNCTION =======================================================// //



    // //============================== READ FUNCTION =========================================================// //

    adminGetCheckout: (req, res) => {
        let sql = `SELECT t.idtransactions, u.username, t.totalprice, t.paymentstatus FROM transactions t JOIN users u ON t.idusers = u.idusers`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetCheckoutDetail: (req, res) => {
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts WHERE td.paymentstatus='Payment Uploaded' AND td.idtransactions=${req.params.idtransactions}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetReceiver: (req, res) => {
        const { id } = req.params
        let sql = `SELECT username, address, province, postalcode FROM users JOIN transactions ON users.idusers = transactions.idusers WHERE transactions.idusers = ${idusers}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

}