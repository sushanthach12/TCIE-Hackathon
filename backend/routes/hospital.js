const express = require('express');
const router = express.Router();
const registerHospital = require('../controllers/hospitalController');
// @route   POST api/hospital
// @desc    Register a hospital
router.post('/registerHos', async (req, res) => {
    registerHospital(req, res)
})


module.exports = router;
