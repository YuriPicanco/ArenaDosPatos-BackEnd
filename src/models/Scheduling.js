const mongoose = require("mongoose");

const SchedulingSchema = new mongoose.Schema({
  dataTime: Date,
  field: {
    type: String,
    default: "Arena dos Patos",
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  state: {
    type: String,
    enum: ["cancelado", "pendente", "agendado", "jogado"],
    default: "agendado",
  },
  total: {
    type: String,
    default: 1,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model("Scheduling", SchedulingSchema);
