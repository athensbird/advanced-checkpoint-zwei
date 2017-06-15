// import mongoose from "mongoose";
const mongoose = require("mongoose");

const PeopleSchema = new mongoose.Schema({
  _id:{
    type: Number
  },
  Name: {
    type: String
  },
  Alter: {
    type: Number
  },
  Gipfel: {
    type: Number
  },
  Heimat: {
    type: String
  }
});

// export default mongoose.model("Person", PeopleSchema);
module.exports = mongoose.model("People", PeopleSchema);
