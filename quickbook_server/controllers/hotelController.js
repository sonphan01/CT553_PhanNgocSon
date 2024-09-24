const Hotel = require('../models/Hotel');

exports.getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find().populate('rooms');
        res.json(hotels);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.addHotel = async (req, res) => {
    const { name, address } = req.body;
    const newHotel = new Hotel({ name, address });

    try {
        const savedHotel = await newHotel.save();
        res.json(savedHotel);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
