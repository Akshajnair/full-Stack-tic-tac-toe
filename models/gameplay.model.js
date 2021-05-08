const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameplaySchema = new Schema({
  arr: [
    {
      place: { type: Number, trim: true },
      data: { type: Number, trim: true },
    },
  ],
  play: {
    type: Number,
    required: false,
    trim: true,
  },
  result: {
    type: Number,
    required: false,
    trim: true,
  },
});

const Gameplay = mongoose.model("Gameplay", gameplaySchema);
module.exports = Gameplay;
