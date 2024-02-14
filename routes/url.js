const express = require("express");
const {
  handleGenerateNewShortUrl,
  handleUrlRedirect,
  handleGetAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);
router.get("/:shortId", handleUrlRedirect);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
