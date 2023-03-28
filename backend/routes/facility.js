const express = require('express');
const Facilities = require('../models/Facilities');
const Hospitals = require('../models/Hospitals');
const router = express.Router();


router.post('/getFacility', async (req, res) => {
    try {

        const { hospitalID } = req.body

        const facility = await Facilities.find({ "hospital": hospitalID })

        return res.status(200).json({ "Success": true, "Facility": {...facility} })

    } catch (error) {
        return res.status(500).json({ "Error": "Internal Server Error" })
    }
})
router.post('/addFacility', async (req, res) => {
    try {

        const { hospitalID, name } = req.body

        const facility = await Facilities.create({
            hospital: hospitalID,
            name: name
        })

        return res.status(200).json({ "Success": true, "Facility": facility })

    } catch (error) {
        return res.status(500).json({ "Error": "Internal Server Error" })
    }
})

router.post('/addFacilitys', async (req, res) => {
    try {
        const faci = ["ECG", "Short-term hospitalization", "X-ray", "Blood Services", "Laboratory services", "Orthopedic", "OPD"]
        let inFaci = []
        let facility

        const hospitals = await Hospitals.find()
        let j = 0
        for (let i in hospitals) {
            inFaci.push(faci[j])
            inFaci.push(faci[j+2])
            j = j === 3? 0:1
            inFaci.push(faci[j+4])
            j = 1
            inFaci.push(faci[j+5])
            facility = await Facilities.create({
                hospital : hospitals[i]._id,
                name : inFaci
            })
            inFaci = []
            j = j === 5? 1:0
        }


        return res.status(200).json({ "Success": true, "Facility": facility })

    } catch (error) {
        return res.status(500).json({ "Error": "Internal Server Error" })
    }
})


module.exports = router;
