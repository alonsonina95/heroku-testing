import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const GuestSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    }
})