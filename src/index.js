const express = require("express");
const mongoose = require("mongoose");
const PeopleRoutes = require("./Routes/PeopleRoutes");
const bodyParser = require("body-parser");
// const People = require("./Models/PeopleModel");

// import mongoose from "mongoose";
// import PeopleRoutes from "./Routes/PeopleRoutes";
// import bodyParser from "body-parser";

const app = express();

// always put bodyparser before customized middlewares
app.use(bodyParser.json());
app.use(PeopleRoutes);

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint-zwei");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("MongoDB Connected!!!");
});

const port = process.env.PORT || 3001;

// app.get("/liste", (req, res) => {
//   People.find({}).exec()
//     .then(people => {
//       console.log(People);
//       return res.json(people);
//     })
//     .catch(err => res.json(err));
// });

app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
