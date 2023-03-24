const express = require('express');
const connectDB = require('./database/config')
require('dotenv').config()
const cors = require('cors')

connectDB()

const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json()) // if you want use req body , you have to use thsi

app.use('/api/auth', require('./routes/auth'))
app.use('/api/bed', require('./routes/bed'))
app.use('/api/hospital', require('./routes/hospital'))
app.use('/api/bookbed', require('./routes/bookbed'))
app.use('/api/facility', require('./routes/facility'))

app.listen(port, () => {
    console.log(`Backend is listening at ${port}`)
})

module.exports = app