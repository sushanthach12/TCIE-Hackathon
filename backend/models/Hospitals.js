const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    pincode: {
        type: String,
        required: true
    }
},
        {
        timestamps: true,
    }
);

module.exports = mongoose.model('Hospitals', HospitalSchema)
