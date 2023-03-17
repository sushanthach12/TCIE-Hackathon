const mongoose = require("mongoose");

const Facilities = mongoose.Schema(
    {
        name: { type: String, required: true },
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Hospital',
        },
    },
    {
        timestamps: true,
    }
)

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
