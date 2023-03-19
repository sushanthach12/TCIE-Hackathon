const express = require('express');
const router = express.Router();
const { registerHospital, getHospitals } = require('../controllers/hospitalController');
const getHospital = require('../controllers/hospitalController');
const authorize = require('../middleware/authorize')

router.post('/registerHos', authorize, async (req, res) => {
    registerHospital(req, res)
})
router.post('/getHos', async (req, res) => {
    getHospitals(req, res)
})


module.exports = router;
