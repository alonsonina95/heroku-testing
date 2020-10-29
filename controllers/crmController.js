import mongoose from 'mongoose';
import { GuestSchema } from '../models/crmModel.js';

const Guest = mongoose.model('Guest', GuestSchema);

export const addNewGuest = (req, res) => {
    let newGuest = new Guest(req.body);

    newGuest.save((err, guest ) => {
        if (err) {
            err.send(err)
        }
        res.json(guest);
    });
}

export const getGuests = (req, res) => {
    Guest.find({},(err, guest) => {
        if(err) {
            res.send(err);
        }
        res.json(guest)
    });
}

export const guetGuestWithId = (req, res) => {
    Guest.findById(req.params.guestId,(err, guest) => {
        if (err) {
            res.send(err);
        }
        res.json(guest)
    });
}

export const updateGuest = (req, res) => {
    Guest.findOneAndUpdate({_id: req.params.guestId}, req.body, { new: true , useFindAndModify: false }, (err, guest) => {
        if (err) {
            res.send(err);
        }
        res.json(guest)
    });
}

export const deleteGuest = (req, res) => {
    Guest.remove({_id: req.params.guestId}, (err, guest) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'successfully deleted guest'});
    });
}

