// backend/routes/bookingRoutes.js
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

// Định nghĩa các tuyến đường cho đặt phòng
router.get('/', bookingController.getBookings);
router.post('/', bookingController.createBooking);

module.exports = router;
