const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)

export default mongoose.models?.User || mongoose.model("User", UserSchema)