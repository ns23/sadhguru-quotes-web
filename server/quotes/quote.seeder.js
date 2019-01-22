const Quotes = require("./quotes.model");
const mongoose = require("mongoose");
const fs = require("fs");

mongoose.connect(
  "",
  { useNewUrlParser: true }
);
const rawQuotes = fs.readFileSync("data.json");
const quotes = JSON.parse(rawQuotes);

Quotes.collection.insertMany(quotes.tweets, (err, result) => {
  if (err) console.error(err);
  console.log(result);
});
