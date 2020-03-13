const express = require('express')
const { productcontroller } = require('../controllers')

const router = express.Router()

router.post('/addproducts', productcontroller.postProducts)

router.get('/getdroneproducts', productcontroller.getDroneProducts)
router.get('/getdroneaccessoriesproducts', productcontroller.getDroneAccessoriesProducts)
router.get('/getaccessoriesproducts', productcontroller.getAccessoriesProducts)
router.get('/getproducttypes', productcontroller.getProductTypes)
router.get('/getdronebodyproducts', productcontroller.getDroneBodyProducts)
router.get('/getdronewingproducts', productcontroller.getDroneWingProducts)
router.get('/getdronemotorproducts', productcontroller.getDroneMotorProducts)
router.get('/getdronebatteryproducts', productcontroller.getDroneBatteryProducts)

router.put('/editdroneproducts/:id', productcontroller.editDroneProducts)
router.put('/editdroneaccessoriesproducts/:id', productcontroller.editDroneAccessoriesProducts)
router.put('/editaccessoriesproducts/:id', productcontroller.editAccessoriesProducts)

router.delete('/deleteproducts/:id', productcontroller.deleteProducts)

module.exports = router

