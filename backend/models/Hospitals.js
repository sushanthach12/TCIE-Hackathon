const mongoose = require('mongoose')

const { Schema } = mongoose

const HospitalSchema = new Schema({
    id : { type: String, required: true, unique : true},
    name : {type : String, required: true}
})