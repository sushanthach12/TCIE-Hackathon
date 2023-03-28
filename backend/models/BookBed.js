const mongoose = require('mongoose')

const { Schema } = mongoose

const BookBedSchema = new Schema({
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    bedId: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    Aadhaar: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    }
)
module.exports = mongoose.model('BookBeds', BookBedSchema)