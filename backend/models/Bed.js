import mongoose from 'mongoose'

const bedSchema = mongoose.Schema(
    {
      hospital: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Hospital',
      },
      bedNumber: {
        type: Number,
        required: true,
      },
      roomNumber: {
        type: Number,
        required: true,
      },
      occupied: {
        type: Boolean,
        required: true,
        default: false,
      },
    },
    {
      timestamps: true,
    }
  )
  const Bed = mongoose.model('Bed', bedSchema)
  export default Bed
