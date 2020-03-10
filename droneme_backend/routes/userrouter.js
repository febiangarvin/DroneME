const express = require('express')
const { usercontroller } = require('../controllers')

const router = express.Router()

router.get('/getusers', usercontroller.getUsers)

module.exports = router