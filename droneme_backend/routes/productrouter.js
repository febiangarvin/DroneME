const express = require('express')
const { productcontroller } = require('../controllers')

const router = express.Router()

router.post('/addproducts', productcontroller.postProducts)

router.get('/getdroneproducts', productcontroller.getDroneProducts)
router.get('/getdroneaccessoriesproducts', productcontroller.getDroneAccessoriesProducts)
router.get('/getaccessoriesproducts', productcontroller.getAccessoriesProducts)
router.get('/getproducttypes', productcontroller.getProductTypes)

module.exports = router

