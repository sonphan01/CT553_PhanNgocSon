const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: String, required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Booking', BookingSchema);
