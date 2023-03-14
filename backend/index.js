const express = require('express');

const app = express()
// const port = process.env.PORT || 5000;
const port = 5000;

app.use(express.json()) // if you want use req body , you have to use thsi

app.listen(port, () => {
    console.log(`Backend is listening at ${port}`)
})

module.exports = app