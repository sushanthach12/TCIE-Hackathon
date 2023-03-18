const mongoose = require('mongoose')

const BedSchema = mongoose.Schema(
	{
		hospitalID: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'Hospital',
		},
		bedId: {
			type: String,
			required: true,
			unique: true
		},
		bedNumber: {
			type: Number,
			required: true,
		},
		amount: {
			type: Number,
			default: 500
		},
		roomNumber: {
			type: Number,
			required: true,
		},
		roomtype: {
			type: String,
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

module.exports = mongoose.model('Beds', BedSchema)