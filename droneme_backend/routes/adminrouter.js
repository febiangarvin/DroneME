const express = require('express')
const { admincontroller } = require('../controllers')

const router = express.Router()

router.get('/admingetusers', admincontroller.adminGetUsers)
router.get('/admingetunapprovedcheckout', admincontroller.adminGetUnapprovedCheckout)
router.get('/admingetapprovedpayment', admincontroller.adminGetApprovedPayement)
router.get('/admingetunapprovedcheckoutdetail/:idtransactions', admincontroller.adminGetUnapprovedCheckoutDetail)
router.get('/admingetapprovedpaymentdetail/:idtransactions', admincontroller.adminGetApprovedPaymentDetail)
router.get('/admingetreceiver/:idtransactions', admincontroller.adminGetReceiver)
router.get('/admingetreport', admincontroller.adminGetReport)

router.post('/admingettotalincome', admincontroller.adminGetTotalIncome)
router.post('/admingettotalsoldproducts', admincontroller.adminGetTotalSoldProducts)
router.post('/approvepayment/:idtransactions', admincontroller.adminApprovePayment)
router.post('/rejectpayment/:idtransactions', admincontroller.adminRejectPayment)

router.delete('/admindeleteuser/:idusers', admincontroller.adminDeleteUser)

module.exports = router