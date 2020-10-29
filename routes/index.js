import { addNewGuest, getGuests, guetGuestWithId, updateGuest, deleteGuest } from '../controllers/crmController.js';

var express = require("express")
var router = express.Router()

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {title: "Express"})
})

router.get("/health", (req, res) => {
  res.send("Server Working")
})

router.get("/guest", getGuests)

router.post("/guest", addNewGuest)

router.get("/guest/:guestId", guetGuestWithId)

router.put("/guest/:guestId", updateGuest)

router.delete("/guest/:guestId", deleteGuest)

module.exports = router
