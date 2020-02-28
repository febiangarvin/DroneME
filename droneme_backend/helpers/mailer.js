const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'garvin.abidin@gmail.com',
        pass: 'vzoheaykhmhtoiwi'
    },
    tls: {
        rejectUnauthorized: false
    }
})

module.exports = transporter