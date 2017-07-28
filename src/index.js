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
// var dp = proxy({
//         target: "https://od-api.oxforddictionaries.com/api/v1",
//         changeOrigin: true,
//     });

const app = express();

const myheader = {
  // eslint-disable-next-line
  "Accept": "application/json",
  // eslint-disable-next-line
  "app_id": "7ebba1c9",
  // eslint-disable-next-line
  "app_key": "c5379b69b507e37aef06a8736e88c428",
  "Access-Control-Allow-Origin": "*",
};



// always put bodyparser before customized middlewares
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",
             "Origin, X-Requested-With, Content-Type, Accept, access-control-allow-origin");
  res.header("Access-Control-Allow-Methods", "PUT, DELETE, GET, POST");
  next();
});

app.use(PeopleRoutes);

app.get('/api/:word', function(req,res){
  //fetch('http://localhost:3001/api/stinky')
  var word = req.params.word
  console.log('page hit word:',word)
  var options = {
    method:'GET',
    headers: myheader,
    url:'https://od-api.oxforddictionaries.com/api/v1/entries/en/' + word
  }

  request(options,function(err,apiResponse,body){
    if(err) {
      console.error(err)
      return res.sendStatus(400)
    }
    else  {
      console.log(body)
      try{
        body = JSON.parse(body)
      } catch(e){}
      var def=''
      try{
        def = body.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
      } catch(e) {

      }
      return res.status(200).json({def:def})
    }
  })
});

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint-zwei");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("MongoDB Connected!!!");
});

const port =  3001;

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
