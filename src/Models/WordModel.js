const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  word: {
    type: String
  },
  definition: {
    type: String
  },
  repeatedTimes: {
    type: Number
  },
  masterLevel: {
    type: Number
  }
});

module.exports = mongoose.model("Word", WordSchema);
