const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const { applyDefaults } = require("./User");

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    default: "пользователь",
  },
  description: {
    type: String,
  },
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Role", RoleSchema);
