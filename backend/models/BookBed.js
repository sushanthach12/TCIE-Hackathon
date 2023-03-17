const mongoose = require('mongoose')

const { Schema } = mongoose

const BookBedSchema = new Schema({
    hospitalId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Hospital',
    },
    bedId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Bed',
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    }
},
    {
        timestamps: true
    }
)
module.exports = mongoose.model('BookBeds', BookBedSchema)