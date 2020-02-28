const hashpassword = require('./../helpers/encrypt')
const cryptogenerate = require('./../helpers/encrypt')
const { mysqldb } = require('./../connections')
const { createJWTToken, createJWTTokenemail } = require('./../helpers/jwt')
const transporter = require('./../helpers/mailer')

module.exports = {
    register: (req, res) => {
        const { username, email, password, confirmpassword } = req.body

        var sql = `SELECT idusers FROM users WHERE username='${username}'`
        mysqldb.query(sql, (err, results) => {
            if (err) return res.status(500).send({ status: 'error', err })

            if (username === '' || email === '' || password === '' || confirmpassword === '') {
                return res.status(200).send({ status: "error", message: 'Please complete registration' })
            }
            else if (results.length > 0) {
                return res.status(200).send({ status: "error", message: 'Sorry, the username has been taken' })
            }
            else if (password !== confirmpassword) {
                return res.status(200).send({ status: "error", message: 'Password does not match' })
            }
            else {
                var encryptpass = hashpassword(password)
                var data = {
                    username,
                    email,
                    password: encryptpass,
                    idroles: 1,
                    verification: 'verification incomplete'
                }
                sql = `INSERT INTO users SET ?`
                mysqldb.query(sql, data, (err1, results1) => {
                    if (err) {
                        res.status(500).send({ message: "server error", err: err1 })
                    }
                    return res.status(200).send(results1)
                })

            }
        })
    },

    login: (req, res) => {
        const {
            username,
            password
        } = req.query
        var encryptpass = cryptogenerate(password)
        var sql = `SELECT * FROM users WHERE username='${username}' AND password='${encryptpass}'`
        mysqldb.query(sql, (err, result) => {
            if (err) return res.status(500).send({ status: 'error', err })

            if (username !== username || password !== password) {
                return res.status(200).send({ status: "error", message: 'Please complete registration' })
            }
            return res.send({ result })
            // const token = createJWTToken({ userid: result[0].id, username: result[0].username })
            // console.log(token)
            // return res.send({ username, email: result[0].email, status: 'success', token })
        })
    },

    keeplogin: (req, res) => {
        const { id } = req.params
        var sql = `SELECT u.*, r.roles FROM users u JOIN roles r ON u.idroles=r.idroles WHERE u.idusers=${id}`
        mysqldb.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            return res.send({ result })
        })
    },

    hashpassword: (req, res) => {
        var { password } = req.params
        var encrypt = hashpassword(password)
        return res.send({ encrypt, password })
    }
}