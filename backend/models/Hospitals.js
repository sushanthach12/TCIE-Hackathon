const mongoose = require("mongoose");
const Facilities = require("./Facilities");


const HospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        facilities: [Facilities],
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
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Hospitals', HospitalSchema)
