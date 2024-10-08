const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type : String,
        maxlength : 50
    },
    email: {
        type: String,
        trim : true, // 스페이스 없애주는 역할
        unique : 1
    },
    password: {
        type: String,
        minlength : 5
    },
    lastname: {
        type : String,
        maxlength : 10
    },
    role: {
        type: Number,
        default : 0
    },
    image : String,
    token : {
        type:String
    },
    tokenExp : { // 토큰 유효기간
        type : Number
    }

})

const User = mongoose.model('User',userSchema)

module.exports = {User}