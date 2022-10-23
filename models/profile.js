const mongoose = require('mongoose')


const profileSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true,
        default: "-"
    },
    pincode: {
        type: Number,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Profile',profileSchema)