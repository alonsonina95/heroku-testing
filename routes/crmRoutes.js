// const cors = require('cors');
// const addNewGuest = require('../controllers/crmController.js');
// const getGuests = require('../controllers/crmController.js');
// const guetGuestWithId = require('../controllers/crmController.js');
// const updateGuest = require('../controllers/crmController.js');
// const deleteGuest = require('../controllers/crmController.js');

// const routes = (server) => {
//     server.route('/guest')
//         .get((req, res, next) => {
//             // middleware
//             console.log(`Request from: ${req.originalUrl}`)
//             console.log(`Request type: ${req.method}`)
//             next();
//         }, getGuests)

//         .post(addNewGuest);
    
//     server.route('/guest/:guestId')
//         .get(cors(), guetGuestWithId)
//         .put(cors(), updateGuest)
//         .delete(cors(), deleteGuest);
// }

// export default routes;