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
module.exports = mongoose.model('Facilities', Facilities)