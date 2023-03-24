const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String
    },
    state : {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: Number,
        required: true
    }
},
        {
        timestamps: true,
    }
);

module.exports = mongoose.model('Hospitals', HospitalSchema)
