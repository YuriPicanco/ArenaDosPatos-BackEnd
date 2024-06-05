const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const FieldSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // location: {
  //   type: String,
  //   required: true,
  // },
  // size: {
  //   type: String,
  //   required: true,
  // },
  // type: {
  //   type: String,
  //   enum: ["grama", "areia", "artificial"],
  //   required: true,
  // },
});

module.exports = mongoose.model("Field", FieldSchema);
