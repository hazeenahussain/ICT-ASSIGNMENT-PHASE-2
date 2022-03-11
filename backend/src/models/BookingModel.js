const mongoose = require("mongoose");
let mongooseSchema = mongoose.Schema;
const bookingSchema = new mongooseSchema({
  ictkid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  hall: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  event: {
    type: String,
    required: true,
  },
});
var bookingModelObj = mongoose.model("booking", bookingSchema);
module.exports = { bookingModelObj };
