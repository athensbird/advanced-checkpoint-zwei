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
    console.log("create word triggered!");
    const {word} = req.body;
    // check db to prevent duplicate words
    Word.findOne(
      {
        $or: [
               { 'word' : word},
             ]
      }).exec()
      .then(existingWord => {
        console.log("existingWord", existingWord);
        if (existingWord) {
          return res.status(422).json({err: "Word already in the list"});
        }
        const newWord = new Word(req.body);
        newWord.save()
          .then(savedWord => res.json(savedWord))
          .catch(err => res.json(err));
      });
  },
  update: (req, res, next) => {
    console.log(req.body, req.params.id);
    Word.findById(req.params.id).exec()
    .then(word => {
      console.log("Before", word.repeatedTimes);
      word.word = req.body.word || word.word;
      word.definition = req.body.definition || word.definition;
      word.repeatedTimes = req.body.repeatedTimes || word.repeatedTimes;
      word.masterLevel = req.body.masterLevel || word.masterLevel;
      console.log("After", word.repeatedTimes);
      word.save();
    })
    .then(word => res.json(word))
    .catch(err => res.json(err));
  },
  delete: (req, res, next) => {
    Word.findByIdAndRemove(req.params.id).exec()
    .then(() => res.json("Word Deleted!"))
    .catch(err => res.json(err));
  }
}

module.exports = WordController;
