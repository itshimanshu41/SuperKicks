const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    pinCode: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const User=mongoose.model('user',userSchema);

module.exports=User;