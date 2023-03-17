const express = require('express')
const Bed = require('../models/Bed')
const router = express.Router();
const authorize = require('../middleware/authorize')
const BookBed = require('../models/BookBed')

router.post('/bookbed', async (req, res) => {
    try {
        const { hospitalID,bedID, userID } = req.body;
        const checkbed = await Bed.findOne({ _id: bedID, hospitalID: hospitalID })
        if (!checkbed) {
            return res.status(400).json({ err: "Bed not found" })
        }
        else if(checkbed.occupied){
            return res.status(400).json({ err: "Bed already occupied" })
        }else{
            const bookbed = await BookBed.create({
                hospitalID: hospitalID,
                bedID: bedID,
                userID: userID
            })
            checkbed.occupied = true;
            await checkbed.save();
            return res.status(200).json({ "Success": true, "BookBed": bookbed })
        }
    } catch (error) {
        return res.status(500).json({ err: "Internal Server Error" })
    }
})


module.exports = router