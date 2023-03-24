const express = require('express')
const User = require('../models/User')
require('dotenv').config()
const { body, validationResult } = require('express-validator')
const router = express.Router();
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')
const authorize = require('../middleware/authorize')

const JWT_SECRET = process.env.JWT_SECRET;


router.post('/signup', async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ err: errors.array() })
    }

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists!" })
        }

        const hashedPassword = CryptoJS.AES.encrypt(req.body.password, process.env.AES_SEC).toString()

        user = await User.create({
            name: req.body.name,
            phoneNo: req.body.phoneNo,
            email: req.body.email,
            password: hashedPassword
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 });

        return res.status(200).json({ "Success": true, 'AuthToken': authToken });

    } catch (err) {
        return res.status(500).send("Internal Server error")
    }
})


router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
], async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ err: errors.array() })
    }

    try {

        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).json({ error: "Sorry a user with this email dosnt exists!" })
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.AES_SEC);
        const password = hashedPassword.toString(CryptoJS.enc.Utf8)

        if (password !== req.body.password) {
            return res.status(400).json({ error: "Please enter correct credentials" })
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET, { expiresIn: 60 * 60 * 24 * 30 });

        return res.json({ "Success": true, AuthToken: authToken, isAdmin: user.isAdmin, User: user });

    } catch (err) {
        return res.status(500).send("Internal Server error")
    }
})

router.post('/getUser', authorize, async (req, res) => {

    try {
        const userID = req.user.id;
        const user = await User.findById(userID).select('-password');
        return res.send(user)
    } catch (error) {
        return res.status(500).send("Internal Server error")
    }

});

router.post('/checkuser', authorize, async (req, res) => {

    try {
        const token = req.header('authToken');
        return res.json({ "Success": true, "token": token })
    } catch (error) {
        return res.status(500).send("Internal Server error")
    }

});


module.exports = router