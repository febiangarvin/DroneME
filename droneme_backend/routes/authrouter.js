const express = require('express')
const { authcontroller } = require('../controllers')
// const { auth } = require('./../helpers/auth')

const router = express.Router()

router.post('/register', authcontroller.register)

router.get('/changeencrypt/:password', authcontroller.hashpassword)
router.get('/login', authcontroller.login)
router.get('/keeplogin/:id', authcontroller.keeplogin)
router.get('/getusers', authcontroller.getUsers)

router.put('/updatepassword/:id', authcontroller.updatePassword)

router.delete('/deleteuser/:id', authcontroller.deleteUser)

// router.get('/authlog/:id', authcontroller.Authlogin)
// router.get('/authlog', authcontroller.Authlogin)
// router.get('/verified', auth, authcontroller.verifiedemail)
// router.post('/resendemailver', authcontroller.resendemailver)


module.exports = router