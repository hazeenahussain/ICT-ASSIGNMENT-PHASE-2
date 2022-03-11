const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ictkid: {
      type: String,
      required: true,
    },
    event: {
      type: String,
      required: false,
    },
    hall: {
      type: String,
      required: false,
    },
    date: {
      type: String,
      required: false,
    },
    start: {
      type: Date,
      required: false,
    },
    end: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
