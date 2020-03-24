const express = require('express')
const { admincontroller } = require('../controllers')

const router = express.Router()

router.get('/admingetcheckout', admincontroller.adminGetCheckout)
router.get('/admingetcheckoutdetail/:idtransactions', admincontroller.adminGetCheckoutDetail)

module.exports = router