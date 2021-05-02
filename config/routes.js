const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/usersController')

router.post('/api/users/register',usersController.register)
router.post('/api/users/login',usersController.login)


module.exports = router