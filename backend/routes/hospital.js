const express = require('express');
const router = express.Router();
const registerHospital = require('../controllers/hospitalController');
const getHospital = require('../controllers/hospitalController');
// @route   POST api/hospital
// @desc    Register a hospital
router.post('/registerHos', async (req, res) => {
    registerHospital(req, res)
})
router.get('/getHos', async (req, res) => {
    getHospital(req, res)
})


module.exports = router;
