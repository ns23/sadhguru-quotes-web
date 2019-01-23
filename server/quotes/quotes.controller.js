const Quotes = require("./quotes.model");

function getRandom(req, res) {
  _randomQuote()
    .then(quote => res.json(quote))
    .catch(err => console.log(err));
}

function renderQuote(req, res) {
  _randomQuote()
    .then(quote => {
      res.render("index", {
        image: quote.image || "",
        quote: quote.full_tweet || quote.tweet
      });
    })
    .catch(err => console.log(err));
}

function _randomQuote() {
  return new Promise((resolve, reject) => {
    Quotes.count()
      .then(count => Math.floor(Math.random() * count))
      .then(random =>
        Quotes.findOne()
          .skip(random)
          .exec()
      )
      .then(result => resolve(result))
      .catch(err => reject(err));
  });
}
module.exports = { getRandom, renderQuote };
