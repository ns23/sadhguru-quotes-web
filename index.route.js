const express = require("express");
const quotesRoutes = require("./server/quotes/quotes.route");

const router = express.Router(); // eslint-disable-line new-cap

// TODO: use glob to match *.route files

/** GET /health-check - Check service health */
router.get("/health-check", (req, res) => res.send("OK"));

router.use("/quotes", quotesRoutes);

module.exports = router;
