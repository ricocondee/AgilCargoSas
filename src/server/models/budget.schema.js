const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  firstPoint: { type: String, required: true },
  lastPoint: { type: String, required: true },
  vehiclesBudget: { type: String, required: true },
});

module.exports = mongoose.model("budget", budgetSchema);