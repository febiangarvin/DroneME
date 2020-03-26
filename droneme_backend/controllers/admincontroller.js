const { mysqldb } = require('./../connections')

module.exports = {

    // //============================== UPDATE FUNCTION =======================================================// //

    adminApprovePayment: (req, res) => { // //function untuk approve payment
        const data = { // //variable data dengan data data tertentu beserta isinya
            paymentstatus: 'Approved'
        }

        // //variable sql untuk melakukan update dari parameter idtransactions
        let sql = `UPDATE transactions SET ? WHERE idtransactions=${req.params.idtransactions} AND paymentstatus='Payment Uploaded'`
        mysqldb.query(sql, data, (err, res1) => {
            if (err) return res.status(500).send(err)
            // return res.status(200).send({ result: res1 })
            // //buat variable data ke-2 untuk update tabel lain yang berkaitan (ONE TO MANY)
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

    // //============================== READ FUNCTION =========================================================// //

    adminGetUsers: (req, res) => { // //function untuk mengambil users
        // //buat variable sql yang khusus mengambil type tertentu
        var sql = 'SELECT u.username, u.email, u.verification FROM users u WHERE u.idroles=1;'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetUnapprovedCheckout: (req, res) => { // //function untuk mengambil data checkout
        // //buat variable sql yang khusus mengambil type tertentu
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

    adminGetUnapprovedCheckoutDetail: (req, res) => { // //function untuk get checkout detail
        // //buat variable sql yang khusus mengambil type tertentu, beserta parameter khusus dari id transactions (dibuat di frontend)
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts JOIN transactions t ON t.idtransactions=td.idtransactions WHERE td.paymentstatus='Payment Uploaded' AND td.idtransactions=${req.params.idtransactions}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            sql = `SELECT t.idtransactions, t.paymentimage FROM transactions t WHERE t.idtransactions = ${req.params.idtransactions}`
            mysqldb.query(sql, (err1, res2) => {
                if (err1) return res.status(500).send(err1)
                return res.status(200).send({ result: res1, paymentimage: res2[0].paymentimage })
            })
        })
    },

    adminGetApprovedPaymentDetail: (req, res) => {
        let sql = `SELECT td.*, p.productname, p.productprice FROM transactiondetails td JOIN products p ON p.idproducts = td.idproducts JOIN transactions t ON t.idtransactions=td.idtransactions WHERE td.paymentstatus='Approved' AND td.idtransactions=${req.params.idtransactions}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            sql = `SELECT t.idtransactions, t.paymentimage FROM transactions t WHERE t.idtransactions = ${req.params.idtransactions}`
            mysqldb.query(sql, (err1, res2) => {
                if (err1) return res.status(500).send(err1)
                return res.status(200).send({ result: res1, paymentimage: res2[0].paymentimage })
            })
        })
    },

    adminGetReceiver: (req, res) => { // //function untuk get user data
        const { id } = req.params // //variable parameter id yang mewakili idusers
        // //buat variable sql yang khusus mengambil type tertentu, beserta parameter khusus dari id transactions (dibuat di frontend)
        let sql = `SELECT username, address, province, postalcode FROM users JOIN transactions ON users.idusers = transactions.idusers WHERE transactions.idtransactions = ${req.params.idtransactions}`
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },

    adminGetReport: (req, res) => { // //function mengambil report
        let sql = `SELECT COUNT(*) AS usercount FROM users WHERE idroles = 1` // //get total users
        mysqldb.query(sql, (err1, res1) => {
            if (err1) return res.status(500).send(err1)
            const usercount = res1[0].usercount // //collection usercount

            sql = `SELECT COUNT(*) AS droneproductcount FROM products WHERE idproducttypes = 1` // //get total drone product
            mysqldb.query(sql, (err2, res2) => {
                if (err2) return res.status(500).send(err2)
                const totaldroneproducts = res2[0].droneproductcount // //collection total drone product

                sql = `SELECT COUNT(*) AS droneaccessoriesproductcount FROM products WHERE idproducttypes = 2` // //get total droneaccessories product
                mysqldb.query(sql, (err3, res3) => {
                    if (err3) return res.status(500).send(err3)
                    const totaldroneaccessoriesproducts = res3[0].droneaccessoriesproductcount // //collection total drone accessories product

                    sql = `SELECT COUNT(*) AS accessoriesproductcount FROM products WHERE idproducttypes = 3` // //get total accessories product
                    mysqldb.query(sql, (err4, res4) => {
                        if (err4) return res.status(500).send(err4)
                        const totalaccessoriesproducts = res4[0].accessoriesproductcount // //collection total drone product
                        // //me-return variable variable yang sudah dibuat di atas
                        return res.status(200).send({ usercount, totaldroneproducts, totaldroneaccessoriesproducts, totalaccessoriesproducts })
                    })
                })
            })
        })
    },

    adminGetTotalIncome: (req, res) => {
        const date = new Date() // //set default month and year
        const y = date.getFullYear() // //variable untuk mengambil tahun
        const x = date.getMonth() + 1 // //variable untuk mengambil bulan (untuk bulan 0 - 11, maka harus ditambah satu)
        const month = parseInt(req.body.month) || x // //variable untuk get month and year from frontend
        const year = parseInt(req.body.year) || y // //agar bisa memilih salah satu, tidak harus dua duanya

        // //variable sql untuk SUM total price dari tabel transactions dengan parameter tahun dan bulan
        var sql = `SELECT SUM(t.totalprice) AS totalincome FROM transactiondetails td JOIN transactions t ON td.idtransactions = t.idtransactions WHERE t.paymentstatus = 'Approved' AND YEAR(t.transactiondate) = ? AND MONTH(t.transactiondate) = ?`
        mysqldb.query(sql, [year, month], (err, res1) => {
            if (err) return res.status(500).send(err)
            if (res1[0].totalincome === null) { // //kondisi jika saat itu totalincome null
                const totalincome = 0
                return res.status(200).send({ totalincome })
            }
            const totalincome = res1[0].totalincome // //collection total income
            return res.status(200).send({ totalincome })
        })
    },

    adminGetTotalSoldProducts: (req, res) => {
        const date = new Date() // //set default month and year
        const y = date.getFullYear() // //variable untuk mengambil tahun
        const x = date.getMonth() + 1 // //variable untuk mengambil bulan (untuk bulan 0 - 11, maka harus ditambah satu)
        const month = parseInt(req.body.month) || x // //variable untuk get month and year from frontend
        const year = parseInt(req.body.year) || y // //agar bisa memilih salah satu, tidak harus dua duanya

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

    // adminDeleteUser: (req, res) => {
    //     var sql = `DELETE FROM users WHERE idusers = ${req.params.idusers}`
    //     mysqldb.query(sql, (err, res1) => {
    //         if (err) return res.status(500).send(err)
    //         return res.status(200).send({ result: res1 })
    //     })
    // },

}