const express = require("express");
const mongoose = require("mongoose");
const PeopleRoutes = require("./Routes/PeopleRoutes");
const bodyParser = require("body-parser");
const request = require("request");
const proxy = require("http-proxy-middleware");
// const People = require("./Models/PeopleModel");

// import mongoose from "mongoose";
// import PeopleRoutes from "./Routes/PeopleRoutes";
// import bodyParser from "body-parser";

const app = express();

// always put bodyparser before customized middlewares
app.use(bodyParser.json());

app.use('/api', proxy({target: "https://od-api.oxforddictionaries.com", changeOrigin: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
             "Origin, X-Requested-With, Content-Type, Accept, access-control-allow-origin");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE, GET, POST");
  next();
});

app.use(PeopleRoutes);
app.use('/', (req, res) => {
  const url = 'https://od-api.oxforddictionaries.com/api/v1' + req.url;
  req.pipe(request(url).pipe(res));
});

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
