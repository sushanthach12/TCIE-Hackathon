const express = require('express');
const router = express.Router();
const registerHospital = require('../controllers/hospitalController');

// @route   POST api/hospital
// @desc    Register a hospital
router.post('/registerHos', async (req, res) => {
    registerHospital(req, res)
})

// const addOrderItems = asyncHandler(async (req, res) => {
//   const {
//     orderItems,
//     shippingAddress,
//     paymentMethod,
//     itemsPrice,
//     taxPrice,
//     shippingPrice,
//     totalPrice,
//   } = req.body
// console.log(orderItems)
// console.log(shippingAddress)
// console.log(paymentMethod)

// console.log(shippingAddress)
//   if (orderItems && orderItems.length === 0) {
//     res.status(400)
//     throw new Error('No order items')
//     return
//   } else {
//     const order = new Order({
//       orderItems,
//       user: req.user._id,
//       shippingAddress,
//       paymentMethod,
//       itemsPrice,
//       taxPrice,
//       shippingPrice,
//       totalPrice,
//     })

//     const createdOrder = await order.save()

//     res.status(201).json(createdOrder)
//     adminEmailer()
//     orderEmailer(req.user,orderItems[0].name,orderItems[0].price)
//   }
// })


module.exports = router