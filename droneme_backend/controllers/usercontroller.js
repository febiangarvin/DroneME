const { mysqldb } = require('./../connections')

module.exports = {

    // //============================== Read Users ============================================================// //

    getUsers: (req, res) => {
        var sql = 'SELECT u.username, u.email, u.verification FROM users u WHERE u.idroles=1;'
        mysqldb.query(sql, (err, res1) => {
            if (err) return res.status(500).send(err)
            return res.status(200).send({ result: res1 })
        })
    },
}