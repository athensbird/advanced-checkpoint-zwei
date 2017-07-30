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
  find: (req, res, next) => {
    console.log("Started to find the keyword");
    Word.findById(req.params.id).exec()
      .then(word => res.json(word))
      .catch(err => res.json(err));
  },
  create: (req, res, next) => {
    const word = new Word(req.body);
    word.save()
      .then(savedWord => res.json(savedWord))
      .catch(err => res.json(err));
  },
  update: (req, res, next) => {
    console.log("update started!");
    Word.findById(req.params.id).exec()
    .then(word => {
      console.log("Before", word.masterLevel);
      console.log(req.body);
      word.word = req.body.word || word.word;
      word.definition = req.body.definition || word.definition;
      word.repeatedTimes = req.body.repeatedTimes || word.repeatedTimes;
      word.masterLevel = req.body.masterLevel || word.masterLevel;
      console.log("After", word.masterLevel);
      word.save();
    })
    .then(word => res.json(word))
    .catch(err => res.json(err));
  },
  delete: (req, res, next) => {
    console.log("delete started!");
    Word.findByIdAndRemove(req.params.id).exec()
    .then(() => res.json("Word Deleted!"))
    .catch(err => res.json(err));
  }
}

module.exports = WordController;
