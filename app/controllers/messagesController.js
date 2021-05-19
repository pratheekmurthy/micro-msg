const Message = require('../models/message')
const messagesController = {}

//list all messages
messagesController.list=(req,res)=>{
    Message.find()
        .then((messages)=>{
            res.json(messages)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//get all messages belong to particular user
messagesController.getMyMessages = (req,res)=>{
    Message.find({userId : req.userId})
    .then((messages)=>{
        res.json(messages)
    })
    .catch((err)=>{
        res.json(err)
    })
}

// Create a new message
messagesController.create=(req,res)=>{
    const body = req.body
    const message = new Message(body)
    message.userId = req.userId
    message.save()
    .then((message)=>{
        res.json(message)
    })
    .catch((err)=>{
        res.json(err)
    })
}

//update a message
messagesController.update = (req,res)=>{
    const body = req.body
    const id = req.params.id
    Message.findOneAndUpdate({_id : id , userId : req.userId},body,{new:true, runValidators : true})
        .then((message)=>{
            res.json(message)
        })
        .catch((err)=>{
            res.json(err)
        })
}

//delete a message
messagesController.del = (req,res)=>{
    const id = req.params.id
    Message.findByIdAndDelete({_id : id , userId : req.userId})
        .then((message)=>{
            res.json(message)
        })
        .catch((err)=>{
            res.json(err)
        })
}



module.exports = messagesController