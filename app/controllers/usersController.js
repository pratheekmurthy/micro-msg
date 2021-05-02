const { findOne } = require('../models/user')
const User = require('../models/user')
const bycrpt = require('bcryptjs')
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
    const body = req.body
    User.findOne({email : body.email})
    .then((user)=>{
        if(user){
            //res.json(user)
            bycrpt.compare(body.password,user.password)
                .then((result)=>{
                    // res.send(result)
                    if(result){
                        res.send("email password matches")
                    }else {
                        res.send('password does not match')
                    }
                })
                .catch((err)=>{
                    res.json(err)
                })
        }else{
            res.json({error : 'Invalid email /password'})
        }
    })
    .catch((err)=>{
        res.json(err)
    })

}

module.exports = usersController

