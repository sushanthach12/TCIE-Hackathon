const express = require('express')
const Bed = require('../models/Bed')
const router = express.Router();
const authorize = require('../middleware/authorize')


router.post('/getbeds', async (req, res) => {
    try {

        let beds = await Bed.find();

        return res.status(200).json({'Beds' : beds})
        
    } catch (error) {
        return res.status(500).json({err : "Internal Server Error"})
    }
})


module.exports = router