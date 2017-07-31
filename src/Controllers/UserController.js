const User = require("../Models/UserModel");

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
  update: (req, res, next) => {
    User.findById(req.params.id).exec()
      .then(user => {
        user.username = req.body.username || user.username;
        user.level = req.body.level || user.level;
        user.gamesPlayed = req.body.gamesPlayed || user.gamesPlayed;
        user.save()
      })
      .then(person => res.json(person))
      .catch(err => res.json(err));
  }
}

module.exports = UserController;
