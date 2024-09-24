const express = require('express');
const router = express.Router();
const { getHotels, addHotel } = require('../controllers/hotelController');

router.route('/').get(getHotels).post(addHotel);

module.exports = router;
