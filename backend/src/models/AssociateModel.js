const mongoose = require("mongoose");
let mongooseSchema = mongoose.Schema;
const associateSchema = new mongooseSchema({
  ictkid: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});
var associateModelObj = mongoose.model("associate", associateSchema);
module.exports = { associateModelObj };
