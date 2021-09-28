const mongoose = require('mongoose')
const ValidateMail = require('../helper/mongooseMailValidator')

const userSchema = mongoose.Schema({
    name:{
        required:true,
        type: String
    },
    isSuperAdmin:{
        type:Boolean,
        default: true
    },
    email:{
        type:String,
        unique: true,
        required:'Email address is required',
        // validate: [ValidateMail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    passwordHash:{
        required: true,
        type:String
    }
}, {timestamps: true})

const User = mongoose.model('User',userSchema)


module.exports = User
