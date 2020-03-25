const { mysqldb } = require('./../connections')

module.exports = {

    // //============================== UPDATE FUNCTION =======================================================// //

    adminApprovePayment: (req, res) => { // //get data from frontend
        const data = {
            paymentstatus: 'Approved'
        }

        let sql = `UPDATE transactions SET ? WHERE idtransactions=${req.params.idtransactions} AND paymentstatus='Payment Uploaded'`

        mysqldb.query(sql, data, (err, res1) => { // //database actions
            if (err) return res.status(500).send(err)
            // return res.status(200).send({ result: res1 })
            const data2 = {
                paymentstatus: 'Approved'
            }

            var sql = `UPDATE transactiondetails SET ? WHERE idtransactions=${req.params.idtransactions} AND paymentstatus='Payment Uploaded'`
            mysqldb.query(sql, data2, (err1, res2) => {
                if (err1) res.status(500).send(err1)
                return res.status(200).send('Transaction Updated')
            })
        })
    },

    adminRejectPayment: (req, res) => { // //get data from frontend
        const data = {
            paymentstatus: 'Re-upload of payment needed'
        }

        let sql = `UPDATE transactions SET ? WHERE idtransactions=${req.params.idtransactions} AND paymentstatus='Payment Uploaded'`

        mysqldb.query(sql, data, (err, res1) => { // //database actions
            if (err) return res.status(500).send(err)
            // return res.status(200).send({ result: res1 })
            const data2 = {
                paymentstatus: 'Re-upload of payment needed'
            }

            var sql = `UPDATE transactiondetails SET ? WHERE idtransactions=${req.params.idtransactions} AND paymentstatus='Payment Uploaded'`
            mysqldb.query(sql, data2, (err1, res2) => {
                if (err1) res.status(500).send(err1)
                return res.status(200).send('Transaction Updated')
            })
        })
    },

    // //============================== READ FUNCTION =========================================================// //

    adminGetUsers: (req, res) => {
        var sql = 'SELECT u.username, u.email, u.verification FROM users u WHERE u.idroles=1;'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetUnapprovedCheckout: (req, res) => {
        let sql = `SELECT t.idtransactions, u.username, t.totalprice, t.paymentstatus FROM transactions t JOIN users u ON t.idusers = u.idusers AND t.paymentstatus IN ('Payment Uploaded', 'Re-upload of payment needed')`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetApprovedPayement: (req, res) => {
        let sql = `SELECT t.idtransactions, u.username, t.totalprice, t.paymentstatus FROM transactions t JOIN users u ON t.idusers = u.idusers WHERE t.paymentstatus='Approved'`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetUnapprovedCheckoutDetail: (req, res) => {
        let sql = `SELECT td.*, p.productname, p.productprice, t.paymentimage FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts JOIN transactions t ON t.idtransactions=td.idtransactions WHERE td.paymentstatus='Payment Uploaded' AND td.idtransactions=${req.params.idtransactions}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetApprovedPaymentDetail: (req, res) => {
        let sql = `SELECT td.*, p.productname, p.productprice, t.paymentimage FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts JOIN transactions t ON t.idtransactions=td.idtransactions WHERE td.paymentstatus='Approved' AND td.idtransactions=${req.params.idtransactions}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetReceiver: (req, res) => {
        const { id } = req.params
        let sql = `SELECT username, address, province, postalcode FROM users JOIN transactions ON users.idusers = transactions.idusers WHERE transactions.idtransactions = ${req.params.idtransactions}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetReport: (req, res) => {
        // //get total users
        let sql = `SELECT COUNT(*) AS usercount FROM users WHERE idroles = 1`
        mysqldb.query(sql, (err1, res1) => {
            if (err1) return res.status(500).send(err1)
            // //collection usercount
            const usercount = res1[0].usercount

            // //get total drone product
            sql = `SELECT COUNT(*) AS droneproductcount FROM products WHERE idproducttypes = 1`
            mysqldb.query(sql, (err2, res2) => {
                if (err2) return res.status(500).send(err2)
                // //collection total drone product
                const totaldroneproducts = res2[0].droneproductcount

                // //get total droneaccessories product
                sql = `SELECT COUNT(*) AS droneaccessoriesproductcount FROM products WHERE idproducttypes = 2`
                mysqldb.query(sql, (err3, res3) => {
                    if (err3) return res.status(500).send(err3)
                    // //collection total drone product
                    const totaldroneaccessoriesproducts = res3[0].droneaccessoriesproductcount

                    // //get total droneaccessories product
                    sql = `SELECT COUNT(*) AS accessoriesproductcount FROM products WHERE idproducttypes = 3`
                    mysqldb.query(sql, (err4, res4) => {
                        if (err4) return res.status(500).send(err4)
                        // //collection total drone product
                        const totalaccessoriesproducts = res4[0].accessoriesproductcount
                        return res.status(200).send({ usercount, totaldroneproducts, totaldroneaccessoriesproducts, totalaccessoriesproducts })
                    })
                })
            })
        })
    },

    adminGetTotalIncome: (req, res) => {
        // //set default month and year
        const date = new Date()
        const y = date.getFullYear()
        const x = date.getMonth() + 1 // //untuk bulan 0 - 11, maka harus ditambah satu
        // //get month and year from frontend
        const month = parseInt(req.body.month) || x // //agar bisa meilih salah satu, tidak harus dua duanya
        const year = parseInt(req.body.year) || y
        var sql = `SELECT SUM(t.totalprice) AS totalincome FROM transactiondetails td JOIN transactions t ON td.idtransactions = t.idtransactions WHERE t.paymentstatus = 'Approved' AND YEAR(t.transactiondate) = ? AND MONTH(t.transactiondate) = ?`
        mysqldb.query(sql, [year, month], (err, res1) => {
            if (err) return res.status(500).send(err)
            // //collection total price
            if (res1[0].totalincome === null) {
                const totalincome = 0
                return res.status(200).send({ totalincome })
            }
            const totalincome = res1[0].totalincome
            return res.status(200).send({ totalincome })
        })
    },

    adminGetTotalSoldProducts: (req, res) => {
        // //set default month and year
        const date = new Date()
        const y = date.getFullYear()
        const x = date.getMonth() + 1 // //untuk bulan 0 - 11, maka harus ditambah satu
        console.log(req.body)
        // //get month and year from frontend
        const month = parseInt(req.body.month) || x // //agar bisa meilih salah satu, tidak harus dua duanya
        const year = parseInt(req.body.year) || y
        var sql = `SELECT SUM(td.quantity) AS soldproducts FROM transactiondetails td JOIN transactions t ON td.idtransactions = t.idtransactions WHERE t.paymentstatus = 'Approved' AND YEAR(t.transactiondate) = ? AND MONTH(t.transactiondate) = ?`
        mysqldb.query(sql, [year, month], (err, res1) => {
            if (err) return res.status(500).send(err)
            // //collection total price
            if (res1[0].soldproducts === null) {
                const soldproducts = 0
                return res.status(200).send({ soldproducts })
            }
            const soldproducts = res1[0].soldproducts
            return res.status(200).send({ soldproducts })
        })
    },

    // //============================== DELETE FUNCTION =======================================================// //

    adminDeleteUser: (req, res) => {
        var sql = `DELETE FROM users WHERE idusers = ${req.params.idusers}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

}