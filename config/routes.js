const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/usersController')
const {authenticateUser} = require('../app/middlewares/authentication')

router.post('/api/users/register',usersController.register)
router.post('/api/users/login',usersController.login)

//private route
router.get('/api/users/account',authenticateUser,usersController.account)

module.exports = router