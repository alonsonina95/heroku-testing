const GuestSchema =  require('../models/crmModel');
const mongoose = require('mongoose');

const Guest = mongoose.model('Guest', GuestSchema);

const addNewGuest = (req, res) => {
    let newGuest = new Guest(req.body);

    newGuest.save((err, guest ) => {
        if (err) {
            err.send(err)
        }
        res.json(guest);
    });
}

const getGuests = (req, res) => {
    Guest.find({},(err, guest) => {
        if(err) {
            res.send(err);
        }
        res.json(guest)
    });
}

const guetGuestWithId = (req, res) => {
    Guest.findById(req.params.guestId,(err, guest) => {
        if (err) {
            res.send(err);
        }
        res.json(guest)
    });
}

const updateGuest = (req, res) => {
    Guest.findOneAndUpdate({_id: req.params.guestId}, req.body, { new: true , useFindAndModify: false }, (err, guest) => {
        if (err) {
            res.send(err);
        }
        res.json(guest)
    });
}

const deleteGuest = (req, res) => {
    Guest.remove({_id: req.params.guestId}, (err, guest) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfully deleted guest'});
    });
}

module.exports = {
    addNewGuest, getGuests, guetGuestWithId, updateGuest, deleteGuest
}

