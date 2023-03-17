const mongoose = require("mongoose");

const hospitalFacilities = mongoose.Schema(
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
const HospitalSchema = new mongoose.Schema(
    {
        hospitalId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true,
        },
        facilities: [hospitalFacilities],
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

export default mongoose.models?.Hospital || mongoose.model("Hospital", HospitalSchema)
