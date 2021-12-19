const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  nameDest: { type: String, required: true },
  documentType: { type: String, required: true },
  document: { type: Number, required: true },
  startPoint: { type: String, required: true },
  endPoint: { type: String, required: true },
  vehicles: { type: String, required: true },
  datetime: { type: String, required: true },
  paymentMethod: { type: String, required: true },

});

module.exports = mongoose.model("order", orderSchema);