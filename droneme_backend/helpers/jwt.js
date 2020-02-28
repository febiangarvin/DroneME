const jwt = require('jsonwebtoken');

module.exports = {
    createJWTToken(payload) {
        return jwt.sign(payload, "dronemeprisoner", { expiresIn: '12h' })
    },
    createJWTTokenemail(payload) {
        return jwt.sign(payload, "dronemeprisoner", { expiresIn: '180000' })
    },
}