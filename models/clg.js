const mongoose = require('mongoose')


const clgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    nirf: {
        type: Number,
        required: true,
        default: "-"
    },
    fees: {
        type: String,
        default: "-"
    },
    logo: {
        type: String
    },
    place: {
        type : String,
        required: true
    },
    course: {
        type : Array,
        required: true
    }
})

module.exports = mongoose.model('Clg',clgSchema)