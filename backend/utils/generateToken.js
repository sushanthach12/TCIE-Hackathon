const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = async(id) => {
  return jwt.sign(id, process.env.JWT_SECRET, {
    expiresIn: '30d',
  })
}

<<<<<<< HEAD
module.exports = generateToken
=======
module.exports= generateToken
>>>>>>> 378af08cca06490070165a0074d3dfdba2f02c02
