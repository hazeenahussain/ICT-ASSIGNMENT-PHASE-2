const router = require("express").Router();
const Event = require("../models/EventModel");

//CREATE Event
router.post("/", async (req, res) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL Events
router.get("/", async (req, res) => {
  try {
    let Events = await Event.find();
    res.status(200).json(Events);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
