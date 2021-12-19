const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
  originPoint: { type: String, required: true },
  destinatePoint: { type: String, required: true },
  distance: { type: String, required: true },
  time: { type: String, required: true },

});

module.exports = mongoose.model("dashboard", dashboardSchema);