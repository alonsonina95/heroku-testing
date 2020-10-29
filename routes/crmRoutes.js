import { addNewGuest, getGuests, guetGuestWithId, updateGuest, deleteGuest } from '../controllers/crmController.js'
import cors from 'cors';

const routes = (server) => {
    server.route('/guest')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getGuests)

        .post(addNewGuest);
    
    server.route('/guest/:guestId')
        .get(cors(), guetGuestWithId)
        .put(cors(), updateGuest)
        .delete(cors(), deleteGuest);
}

export default routes;