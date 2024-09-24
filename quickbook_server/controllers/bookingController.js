
const Booking = require('../models/Booking');

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createBooking = async (req, res) => {
    const { hotelId, userId, roomId, startDate, endDate } = req.body;
    const newBooking = new Booking({ hotelId, userId, roomId, startDate, endDate });

    try {
        const savedBooking = await newBooking.save();
        res.json(savedBooking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
