const express = require('express')
const Bed = require('../models/Bed')
const router = express.Router();
const authorize = require('../middleware/authorize')
const BookBed = require('../models/BookBed')

router.post('/bookbed', authorize, async (req, res) => {
    try {
        const userID = req.user.id
        const { hospitalID, bedID } = req.body;

        const checkbed = await Bed.findOne({ "bedId": bedID, "hospitalID": hospitalID })

        if (!checkbed) {
            return res.status(400).json({ "err": "Bed not found" })
        }

        const bookbed = await BookBed.create({
            hospitalId: hospitalID,
            bedId: bedID,
            userId: userID
        })
        checkbed.occupied = true
        checkbed.save();
        
        return res.status(200).json({ "Success": true, "BookBed": bookbed })

    } catch (error) {
        return res.status(500).json({ err: "Internal Server Error" })
    }
})


module.exports = router