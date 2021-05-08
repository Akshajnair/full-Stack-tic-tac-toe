const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const gameplaySchema = new Schema({
  arr: [
    {
      place: { type: String, trim: true },
      data: { type: String, trim: true },
      turn: { type: String, trim: true },
    },
  ],
  play: {
    type: String,
    required: false,
    trim: true,
  },
  result: {
    type: String,
    required: false,
    trim: true,
  },
});

const Gameplay = mongoose.model("Gameplay", gameplaySchema);
module.exports = Gameplay;
