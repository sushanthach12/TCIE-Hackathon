const express = require('express')
const Bed = require('../models/Bed')
const User = require('../models/User')
const router = express.Router();
const authorize = require('../middleware/authorize')


router.post('/addbed', authorize, async (req, res) => {
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select('-password');

        if (user.isAdmin) {
            const { hospitalID, bedId, bedNumber, roomNumber, roomtype, occupied } = req.body

            await Bed.create({
                hospitalID: hospitalID,
                bedId: bedId,
                bedNumber: bedNumber,
                roomNumber: roomNumber,
                roomtype: roomtype,
                occupied: occupied,
            })

            return res.status(200).json({ 'Success': true })
        }
        return res.status(400).json({ 'Error': "Unauthorised Access" })

    } catch (error) {
        return res.status(500).json({ err: "Internal Server Error" })
    }
})

router.post('/addbeds', authorize, async (req, res) => {
    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select('-password');

        if (user.isAdmin) {

            await Bed.insertMany(req.body)

            return res.status(200).json({ 'Success': true })
        }
        return res.status(400).json({ 'Error': "Unauthorised Access" })

    } catch (error) {
        return res.status(500).json({ err: "Internal Server Error" })
    }
})


router.post('/getBeds', async (req, res) => {
    try {
        
        const { hospitalID } = req.body

        const beds = await Bed.find({"hospitalID" : hospitalID})

        return res.status(200).json({ 'Success': true, 'Beds': {...beds} })

    } catch (error) {
        return res.status(500).json({ err: "Internal Server Error" })
    }
})

module.exports = router