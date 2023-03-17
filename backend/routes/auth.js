const express = require('express')
const User = require('../models/User')
const { body, validationResult } = require('express-validator')
const router = express.Router();
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const authorize = require('../middleware/authorize')

const JWT_SECRET = process.env.JWT_SECRET;


router.post('/signup', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'password must be atleast of 8 characters').isLength({ min: 8 }),
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ err: errors.array() })
    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists!" })
        }

        user = await User.create({
            name: req.body.name,
            phoneNo: req.body.phoneNo,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.AES_SEC).toString()
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 });

        return res.status(200).json({ "Success": true, AuthToken: authToken, User: user });

    } catch (err) {
        return res.status(500).send("Internal Server error")
    }
})


module.exports = router