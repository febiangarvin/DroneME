const express = require('express')
const { usercontroller } = require('../controllers')

const router = express.Router()

router.post('/addcart', usercontroller.userAddCart)

router.get('/getusers', usercontroller.getUsers)
router.get('/usergetcart/:id', usercontroller.userGetCart)

router.delete('/deletecart/:id', usercontroller.userDeleteCart)

module.exports = router