const asyncHandler = require('express-async-handler')
const Hospitals = require('../models/Hospitals')
const { generateToken } = require('../utils/generateToken')
const registerHospital = asyncHandler (async (req, res) => {
    const {  name, facilities, email, password, address } = req.body
    console.log(name)
    console.log(facilities)
    console.log(email)
    console.log(address)
    const hospitalExist = await Hospitals.findOne({ email })
    if(hospitalExist) {
        res.status(400)
        throw new Error('Hospital already exists')
    }
    const hospital = await Hospitals.create({
        name,
        facilities,
        email,
        password,
        address
    })
    if(hospital) {
        res.status(201).json({
            _id: hospital._id,
            name: hospital.name,
            email: hospital.email,
            address: hospital.address,
            facilities: hospital.facilities,
            token:generateToken(hospital._id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

})
module.exports = registerHospital