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
const Hospital = mongoose.model('Hospital', HospitalSchema)
export default Hospital
