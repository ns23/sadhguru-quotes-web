const Quotes = require("./quotes.model");

function getRandom(req, res) {
  Quotes.count()
    .then(count => Math.floor(Math.random() * count))
    .then(random =>
      Quotes.findOne()
        .skip(random)
        .exec()
    )
    .then(result => res.json(result))
    .catch(err => console.log(er));
}

module.exports = { getRandom };
