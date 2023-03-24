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
            const { name, email, state, city, address, pincode } = req.body
            const hospitalExist = await Hospitals.findOne({ 'email': email })
            if (hospitalExist) {
                return res.status(400).json({ "Err": ' Hospital already exists' })
            }
            const hospital = await Hospitals.create({
                name: name,
                email: email,
                state: state,
                city : city,
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

        return res.status(200).json({ "Success": true, "Hospital": {...hospital }})
    } catch (error) {
        return res.status(500).json({ "Err": "Internal Server Error" })
    }
})

const getHospital = asyncHandler(async (req, res) => {
    try {

        const hospital = await Hospitals.find({city: req.body.district})

        return res.status(200).json({ "Success": true, "Hospital": hospital })
    } catch (error) {
        return res.status(500).json({ "Err": "Internal Server Error" })
    }
})

const getCities = asyncHandler(async (req, res) => {
    try {
        let cities = []

        const hospital = await Hospitals.find()

        for(let i in hospital){
            if(!cities.includes(hospital[i].city))
                cities.push(hospital[i].city)
        }

        return res.status(200).json({ "Success": true, "Cities": cities })
    } catch (error) {
        return res.status(500).json({ "Err": "Internal Server Error" })
    }
})

module.exports = { registerHospital, getHospitals, getHospital, getCities }