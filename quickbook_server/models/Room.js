const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
    number: { type: Number, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    hotel: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' }
});

module.exports = mongoose.model('Room', RoomSchema);
