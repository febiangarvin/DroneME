const express = require('express')
const { usercontroller } = require('../controllers')

const router = express.Router()

router.post('/addcart', usercontroller.userAddCart)
router.post('/addcheckout', usercontroller.userAddCheckout)

router.get('/usergetcart/:id', usercontroller.userGetCart)
router.get('/usergetreceiver/:id', usercontroller.userGetReceiver)
router.get('/usergetcheckout/:id', usercontroller.userGetCheckout)
router.get('/usergetcheckoutdetail/:id/:idtransactions', usercontroller.userGetCheckoutDetail)

router.post('/addpaymentimage', usercontroller.userAddPaymentImage)

router.delete('/deletecart/:id', usercontroller.userDeleteCart)
router.delete('/deletecheckout/:id', usercontroller.userDeleteCheckout)

module.exports = router