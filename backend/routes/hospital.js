const express = require('express');
const router = express.Router();
const { registerHospital, getHospitals, getHospital, getCities, getHospitalData } = require('../controllers/hospitalController');
const authorize = require('../middleware/authorize');
const Hospitals = require('../models/Hospitals');
const d = require('../new.json')

router.post('/registerHos', authorize, async (req, res) => {
    registerHospital(req, res)
})
router.post('/getHospitals', async (req, res) => {
    getHospitals(req, res)
})
router.post('/getHos', async (req, res) => {
    getHospital(req, res)
})
router.post('/getHospital', async (req, res) => {
    getHospitalData(req, res)
})

router.post('/getCities', async (req, res) => {
    getCities(req, res)
})


router.post('/addHos', async(req, res) => {
    try {
        let datas = []

        for(let i in d){
            if(d[i].State === 'Karnataka'){

                let data = {
                    name : d[i].Hospital,
                    state: d[i].State,
                    city : d[i].City,
                    address : d[i].LocalAddress,
                    pincode : d[i].Pincode
                }
                datas.push(data)
            }
                
        }
        await Hospitals.insertMany(datas)
        
        return res.status(200).json({ "Success": true, "BookBed": datas })

    } catch (error) {
        return res.status(500).json({ err: "Internal Server Error" })
    }
})


module.exports = router;
