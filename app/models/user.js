const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const bcrypt = require('bcryptjs')

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
        unique : true,
        //custom validation for format checking using mongoose
        validate :{
            validator : function(value){
                return isEmail(value)
            },
            message : function(){
                return 'invalid email format'
            }
        }
    },
    password : {
        type :String,
        required : [true,'password needs to be in 8-128 characters'],
        minlength : 8,
        maxlength :128
    }
})

userSchema.pre('save',function(next){
    const user = this
    console.log(user.password)
    bcrypt.genSalt()
        .then((salt)=>{
            bcrypt.hash(user.password,salt)
                 .then((encryptedPassword)=>{
                     user.password = encryptedPassword
                    next()
                })
        })
        .catch((err)=>{
            console.log(err)
        })
 
})

const User = mongoose.model('User', userSchema)

module.exports = User