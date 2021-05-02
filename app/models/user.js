const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type : String,
        required : [true,'username is required'],
        unique :true
    },
    email : {
        type :String,
        required : true,
        unique : true
        //custom validation for format checking
    },
    password : {
        type :String,
        required : [true,'password needs to be in 8-128 characters'],
        minlength : 8,
        maxlength :128
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User