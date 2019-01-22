const express = require('express');
const quotesCtrl = require('./quotes.controller');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/random', quotesCtrl.get);

module.exports = router;
