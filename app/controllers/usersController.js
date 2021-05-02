const User = require('../models/user')
const usersController ={}

usersController.register =(req,res)=>{
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.json(err)
        })
}

usersController.login =(req,res)=>{

}

module.exports = usersController

