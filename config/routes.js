const express = require('express')
const router = express.Router()
const usersController = require('../app/controllers/usersController')
const {authenticateUser} = require('../app/middlewares/authentication')
const messagesController = require('../app/controllers/messagesController')

router.get('/',function(req,res){
    res.json("hi")
})
router.post('/api/users/register',usersController.register)
router.post('/api/users/login',usersController.login)

//private route
router.get('/api/users/account',authenticateUser,usersController.account)

//private messages routes
router.get('/api/users/messages',authenticateUser,messagesController.list)
router.get('/api/users/getmymessages',authenticateUser,messagesController.getMyMessages)
router.post('/api/users/messages',authenticateUser,messagesController.create)
router.put('/api/users/messages/update/:id',authenticateUser,messagesController.update)
router.delete('/api/users/messages/delete/:id',authenticateUser,messagesController.del)


module.exports = router