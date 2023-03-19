const asyncHandler = require('express-async-handler')
const Hospitals = require('../models/Hospitals')
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const JWT_SECRET = process.env.JWT_SECRET

const registerHospital = asyncHandler(async (req, res) => {
    try {

        const userID = req.user.id;
        const user = await User.findById(userID).select('-password')

        if (user.isAdmin) {
            const { name, email, address, pincode } = req.body
            const hospitalExist = await Hospitals.findOne({ 'email': email })
            if (hospitalExist) {
                return res.status(400).json({ "Err": ' Hospital already exists' })
            }
            const hospital = await Hospitals.create({
                name: name,
                email: email,
                address: address,
                pincode: pincode
            })
            const data = {
                hospital: {
                    id: hospital.id
                }
            }
            const token = jwt.sign(data, JWT_SECRET, { expiresIn: '30d' })
            return res.status(200).json({ "Hospital": hospital, 'token': token })
        }

        return res.status(400).json({ "Error": "Unauthorised Access"})
    } catch (error) {
        return res.status(500).json({ "Err": "Internal Server Error" })
    }
})

const getHospitals = asyncHandler(async (req, res) => {
    try {

        const hospital = await Hospitals.find()

        return res.status(200).json({ "Success": true, "Hospital": hospital })
    } catch (error) {
        return res.status(500).json({ "Err": "Internal Server Error" })
    }
})

module.exports = { registerHospital, getHospitals }