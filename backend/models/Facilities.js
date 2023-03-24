const mongoose = require("mongoose");

const Facilities = mongoose.Schema(
    {
        hospital: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Hospital',
        },
        name: [{type: Array, required: true} ],
    },
    {
        timestamps: true,
    }
)
module.exports = mongoose.model('Facilities', Facilities)