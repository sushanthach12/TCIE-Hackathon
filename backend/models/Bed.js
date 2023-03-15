import mongoose from 'mongoose'

const bedSchema = mongoose.Schema(
    {
      hospital: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Hospital',
      },
      name: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      reviews: [reviewSchema],
      rating: {
        type: Number,
        required: true,
        default: 0,
      },
      numReviews: {
        type: Number,
        required: true,
        default: 0,
      },
      price: {
        type: Number,
        required: true,
        default: 0,
      },
      countInStock: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    {
      timestamps: true,
    }
  )
  const Bed = mongoose.model('Bed', bedSchema)
  export default Bed
