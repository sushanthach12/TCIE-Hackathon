const express = require('express');
const router = express.Router();
const registerHospital = require('../controllers/hospitalController');
// @route   POST api/hospital
// @desc    Register a hospital
router.route('/api/hospital').post(registerHospital)

module.exports = router;