const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const { applyDefaults } = require("./User");

const PermissionSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  roleId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
  userId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = mongoose.model("Permission", PermissionSchema);
