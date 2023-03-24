const express = require('express');
const Facilities = require('../models/Facilities');
const router = express.Router();


router.post('/addFacility', async (req, res) => {
    try {
        
        const { hospitalID, name } = req.body

        const facility = await Facilities.create({
            hospital: hospitalID,
            name: name
        })

        return res.status(200).json({"Success" : true, "Facility": facility})

    } catch (error) {
        return res.status(500).json({"Error": "Internal Server Error"})
    }
})


module.exports = router;
