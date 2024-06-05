const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const UserSchema = new mongoose.Schema(
  {
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "Usuario",
      enum: ["Usuario", "Gerente"],
    },
    schedules: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Scheduling",
      },
    ],
  },
  { timestamps: true }
);
UserSchema.index({ phone: 1, email: 1 }, { unique: true });
module.exports = mongoose.model("User", UserSchema);
