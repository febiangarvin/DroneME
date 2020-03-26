const express = require('express')
const { usercontroller } = require('../controllers')

const router = express.Router()

router.post('/addcart', usercontroller.userAddCart)
router.post('/addcheckout', usercontroller.userAddCheckout)

router.get('/usergetcart/:id', usercontroller.userGetCart)
router.get('/usergetreceiver/:id', usercontroller.userGetReceiver)
router.get('/usergetunpaidcheckout/:id', usercontroller.userGetUnpaidCheckout)
router.get('/usergetpaidcheckout/:id', usercontroller.userGetPaidCheckout)
router.get('/usergetunpaidcheckoutdetail/:id/:idtransactions', usercontroller.userGetUnpaidCheckoutDetail)
router.get('/usergetpaidcheckoutdetail/:id/:idtransactions', usercontroller.userGetPaidCheckoutDetail)

router.post('/addpaymentimage', usercontroller.userAddPaymentImage)

router.delete('/deletecart/:id', usercontroller.userDeleteCart)
// router.delete('/deletecheckout/:id', usercontroller.userDeleteCheckout)

module.exports = router