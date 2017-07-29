const Word = require("../Models/WordModel");

const WordController = {
  list: (req, res, next) => {
    console.log("list triggered!");
    Word.find({}).exec()
      .then(word => {
        console.log(word);
        return res.json(word);
      })
      .catch(err => res.json(err));
  },
  // find: (req, res, next) => {
  //   Word.findById(req.params.word).exec()
  //     .then(word => res.json(word))
  //     .catch(err => res.json(err));
  // },
  create: (req, res, next) => {
    const word = new Word(req.body);
    word.save()
      .then(savedWord => res.json(savedWord))
      .catch(err => res.json(err));
  }
}

module.exports = WordController;
