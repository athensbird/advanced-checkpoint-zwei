const User = require("../Models/UserModel");
const userId = "597f42ea6e21bd2061cac926";

const UserController = {

  list: (req, res, next) => {
    console.log("controller started");
    User.find({}).exec()
      .then(user => {
        console.log(user);
        return res.json(user);
      })
      .catch(err => res.json(err));
  },
  create: (req, res, next) => {
    const user = new User(req.body);
    console.log("user input", user);
    user.save()
      .then(savedUser => res.json(savedUser));
  },
  update: (req, res, next) => {
    console.log(req.body);
    User.findById("597f42ea6e21bd2061cac926").exec()
      .then(user => {
        user.username = req.body.username || user.username;
        user.level = req.body.level || user.level;
        user.gamesPlayed = req.body.gamesPlayed || user.gamesPlayed;
        user.save()
      })
      .then(user => res.json(user))
      .catch(err => res.json(err));
  }
}

module.exports = UserController;
