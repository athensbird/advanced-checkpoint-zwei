const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  level: {
    type: Number
  },
  gamesPlayed: {
    type: Number
  }
})

module.exports = mongoose.model("User", UserSchema);
