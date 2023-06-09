const mongoose = require('mongoose');

const Game = new mongoose.Schema({
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  questions: { type: Array, required: true },
  helps: { type: Array, required: true },
  totalTime: { type: Number, required: true },
  totalCorrect: { type: Number, required: true },
  score: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Game', Game);
