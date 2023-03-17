const express = require('express')
const Bed = require('../models/Bed')
const router = express.Router();
const authorize = require('../middleware/authorize')


router.post('/bookbed', async (req, res) => {
    try {



    } catch (error) {
        return res.status(500).json({ err: "Internal Server Error" })
    }
})


module.exports = router