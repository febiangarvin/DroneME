const express = require('express')
const { usercontroller } = require('../controllers')

const router = express.Router()

router.post('/addcart', usercontroller.userAddCart)
router.post('/addcheckout', usercontroller.userAddCheckout)
router.post('/addorders', usercontroller.userAddOrders)

router.get('/getusers', usercontroller.getUsers)
router.get('/usergetcart/:id', usercontroller.userGetCart)
router.get('/usergetcheckout/:id', usercontroller.userGetCheckout)
router.get('/usergetorders/:id', usercontroller.userGetOrders)

router.delete('/deletecart/:id', usercontroller.userDeleteCart)
router.delete('/deletecheckout/:id', usercontroller.userDeleteCheckout)

module.exports = router