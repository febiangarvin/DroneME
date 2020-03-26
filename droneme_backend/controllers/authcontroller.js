const hashpassword = require('./../helpers/encrypt')
const cryptogenerate = require('./../helpers/encrypt')
const { mysqldb } = require('./../connections')
const { createJWTToken, createJWTTokenemail } = require('./../helpers/jwt')
const transporter = require('./../helpers/mailer')

module.exports = {

    // //============================== CREATE FUNCTION =======================================================// //

    register: (req, res) => { // //function untuk register

        const { username, email, password, confirmpassword, address, province, postalcode } = req.body // //dengan model destructuring, masukan data yang akan dibawa

        var sql = `SELECT idusers FROM users WHERE username='${username}'` // //buat sql, untuk memerika ketersediaan username di database
        mysqldb.query(sql, (err, results) => {
            if (err) return res.status(500).send({ status: 'error', err })
            // //kondisi jika pada register terjadi kesalahan
            if (username === '' || email === '' || password === '' || confirmpassword === '' || address === '' || province === '' || postalcode === '') {
                return res.status(200).send({ status: "error", message: 'Please complete registration' })
            }
            else if (results.length > 0) {
                return res.status(200).send({ status: "error", message: 'Sorry, the username has been taken' })
            }
            else if (password !== confirmpassword) {
                return res.status(200).send({ status: "error", message: 'Password does not match' })
            }
            else { // //jika tidak adanya kesalahan pada kondisi yang tekah dibuat, maka akan mengirimkan data -data di bawah ini
                var encryptpass = hashpassword(password) // //buat variable yang berguna untuk membuat encrypt password
                var data = { // //data yang akan dibawah ke backend saat melakukan registrasi
                    username,
                    email,
                    password: encryptpass,
                    idroles: 1,
                    verification: 'verification incomplete',
                    address,
                    province,
                    postalcode
                }
                sql = `INSERT INTO users SET ?` // //buat sql dengan function INSERT
                mysqldb.query(sql, data, (err1, results1) => {
                    if (err) {
                        res.status(500).send({ message: "server error", err: err1 }) // //jika terjadi error
                    }
                    return res.status(200).send(results1)
                })
            }
        })
    },

    hashpassword: (req, res) => {
        var { password } = req.params
        var encrypt = hashpassword(password)
        return res.send({ encrypt, password })
    },

    // //============================== READ FUNCTION =========================================================// //

    login: (req, res) => { // //function login user
        const { username, password } = req.query // //sebuah query yang dibawa dari database
        var encryptpass = cryptogenerate(password) // //password akan digantikan dengan varuable encryptpass. Dimana password dalam keadaan encrypted

        var sql = `SELECT * FROM users WHERE username='${username}' AND password='${encryptpass}'`
        mysqldb.query(sql, (err, result) => {
            if (err) return res.status(500).send({ status: 'error', err })
            if (username !== username || password !== password) { // //kondisi jika terjadi kesalahan pada login
                return res.status(200).send({ status: "error", message: 'Please complete login' })
            }
            return res.send({ result })
            // const token = createJWTToken({ userid: result[0].id, username: result[0].username })
            // console.log(token)
            // return res.send({ username, email: result[0].email, status: 'success', token })
        })
    },

    keeplogin: (req, res) => { // //function untuk mengambil idusers. Dimana saat berpindah halaman akan tetap dalam keadaan login
        const { id } = req.params
        var sql = `SELECT u.*, r.roles FROM users u JOIN roles r ON u.idroles=r.idroles WHERE u.idusers=${id}`
        mysqldb.query(sql, (err, result) => {
            if (err) return res.status(500).send(err)
            return res.send({ result })
        })
    },

    // //============================== UPDATE FUNCTION =======================================================// //

    // updateAddress: (req, res) => {
    //     const { id } = req.params
    //     const data = {
    //         idusers: parseInt(req.body.idusers),
    //         address: (req.body.address),
    //         province: (req.body.province),
    //         postalcode: parseInt(req.body.postalcode),
    //     }

    //     let sql = `UPDATE users SET ? WHERE idusers = ${id}`
    //     mysqldb.query(sql, data, (err, res1) => {
    //         if (err) return res.status(500).send(err)
    //         return res.status(200).send({ result: res1 })
    //     })
    // },

}