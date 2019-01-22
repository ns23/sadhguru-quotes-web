const Promise = require("bluebird");
const mongoose = require("mongoose");
const httpStatus = require("http-status");
const APIError = require("../helpers/APIError");

/**
 * Quotes Schema
 */

const QuotesSchema = new mongoose.Schema({
  tweet_id: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    required: true
  },
  full_tweet: {
    type: String
  },
  image: {
    type: String
  },
  tweet: {
    type: String
  },
  url: {
    type: String
  }
});

/**
 * Methods
 */
//QuotesSchema.method({});

/**
 * Statics
 */
//QuotesSchema.statics = {};

module.exports = mongoose.model('Quotes', QuotesSchema);

