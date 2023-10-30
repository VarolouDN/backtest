const mongoose = require("mongoose");

const Client = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  id: { type: Number, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
});
module.exports = mongoose.model("Client", Client);
